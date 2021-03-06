/* eslint-disable import/first */

import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import isFinite from 'lodash/isFinite';
import slots from 'rsg-components/slots';
import StyleGuide from 'rsg-components/StyleGuide';
import Pages from 'rsg-components/Pages';
import { getInfoFromHash, filterComponentExamples, filterSectionExamples, filterComponentsInSectionsByExactName, findSection, processSections, processPages, setSlugs, slugger } from './utils/utils';
import './styles';

// Examples code revision to rerender only code examples (not the whole page) when code changes
var codeRevision = 0;

function renderStyleguide() {

	// eslint-disable-next-line import/no-unresolved
	var styleguide = require('!!../loaders/styleguide-loader!./index.js');

	var sections = processPages(styleguide.sections);

	// Parse URL hash to check if the components list must be filtered

	var _getInfoFromHash = getInfoFromHash(),
	    targetName = _getInfoFromHash.targetName,
	    targetIndex = _getInfoFromHash.targetIndex;

	var isolatedComponent = false;
	var isolatedExample = false;
	var isolatedSection = false;

	// Filter the requested component id required
	if (targetName) {
		var filteredComponents = filterComponentsInSectionsByExactName(sections, targetName);
		if (filteredComponents.length) {
			sections = [{ components: filteredComponents }];
			isolatedComponent = true;
		} else {
			var section = findSection(sections, targetName);
			sections = section ? [section] : [];
			isolatedSection = true;
		}

		// If a single component or section is filtered and a fenced block index is specified hide all other examples
		if (isFinite(targetIndex)) {
			if (filteredComponents.length === 1) {
				filteredComponents[0] = filterComponentExamples(filteredComponents[0], targetIndex);
				isolatedExample = true;
			} else if (sections.length === 1) {
				sections[0] = filterSectionExamples(sections[0], targetIndex);
				isolatedExample = true;
			}
		}
	}

	// Reset slugger for each render to be deterministic
	slugger.reset();
	sections = setSlugs(sections);

	var documentTitle = styleguide.config.title;
	if (isolatedComponent || isolatedExample) {
		documentTitle = sections[0].components[0].name + ' — ' + documentTitle;
	} else if (isolatedSection) {
		documentTitle = sections[0].name + ' — ' + documentTitle;
	}
	document.title = documentTitle;
	//console.log(styleguide.config);
	ReactDOM.render(React.createElement(StyleGuide, {
		codeRevision: codeRevision,
		config: styleguide.config,
		slots: slots,
		welcomeScreen: styleguide.welcomeScreen,
		patterns: styleguide.patterns,
		sections: sections,
		isolatedComponent: isolatedComponent,
		isolatedExample: isolatedExample,
		isolatedSection: isolatedSection
	}), document.getElementById('app'));
}

window.addEventListener('hashchange', renderStyleguide);

// window.addEventListener('hashchange', ()=>
// {
// 	if(document.location.hash.substr(0,2) === '#!' )
// 	{
// 		renderStyleguide();
// 	}

// }
// );
/* istanbul ignore if */
if (module.hot) {
	module.hot.accept('!!../loaders/styleguide-loader!./index.js', function () {
		codeRevision += 1;
		renderStyleguide();
	});
}

renderStyleguide();