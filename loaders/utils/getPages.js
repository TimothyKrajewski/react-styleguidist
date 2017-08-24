'use strict';

// This two functions should be in the same file because of cyclic imports

const fs = require('fs');
const path = require('path');
const requireIt = require('./requireIt');
const getComponentFiles = require('./getComponentFiles');
const getComponents = require('./getComponents');

const examplesLoader = path.resolve(__dirname, '../examples-loader.js');

/**
 * Return object for one level of pages.
 *
 * @param {Array} pages
 * @param {object} config
 * @returns {Array}
 */
function getSections(pages, config) {
	return pages.map(page => processSection(page, config));
}

/**
 * Return an object for a given page with all components and sections.
 * @param {object} page
 * @param {object} config
 * @returns {object}
 */
function processSection(page, config) {
	// Try to load page content file
	let content;

	if (page.content) {
		const filepath = path.resolve(config.configDir, page.content);
		if (!fs.existsSync(filepath)) {
			throw new Error(`Styleguidist: Section content file not found: ${filepath}`);
		}
		content = requireIt(`!!${examplesLoader}!${filepath}`);
	}

	return {
		name: page.name,
		components: getComponents(
			getComponentFiles(page.components, config.configDir, config.ignore),
			config
		),
		sections: getSections(page.sections || [], config),
		content,
	};
}

module.exports = getSections;
module.exports.processSection = processSection;
