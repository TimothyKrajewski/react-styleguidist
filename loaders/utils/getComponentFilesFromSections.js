'use strict';

const getComponentFiles = require('./getComponentFiles');

/**
 * Return absolute paths of all components in pages.
 *
 * @param {Array} pages
 * @param {string} rootDir
 * @param {Array} [ignore] Glob patterns to ignore.
 * @returns {Array}
 */
module.exports = function getComponentFilesFrompages(pages, rootDir, ignore) {
	return pages.reduce((components, page) => {
		if (page.components) {
			return components.concat(getComponentFiles(page.components, rootDir, ignore));
		}

		if (page.pages) {
			return components.concat(getComponentFilesFrompages(page.pages, rootDir, ignore));
		}

		return components;
	}, []);
};
