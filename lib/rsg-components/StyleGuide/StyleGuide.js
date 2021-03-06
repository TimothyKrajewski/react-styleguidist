var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableOfContents from 'rsg-components/TableOfContents';
import StyleGuideRenderer from 'rsg-components/StyleGuide/StyleGuideRenderer';
import Sections from 'rsg-components/Sections';
import Welcome from 'rsg-components/Welcome';
import { HOMEPAGE } from '../../../scripts/consts';

var StyleGuide = function (_Component) {
	_inherits(StyleGuide, _Component);

	function StyleGuide() {
		_classCallCheck(this, StyleGuide);

		return _possibleConstructorReturn(this, (StyleGuide.__proto__ || Object.getPrototypeOf(StyleGuide)).apply(this, arguments));
	}

	_createClass(StyleGuide, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				codeRevision: this.props.codeRevision,
				config: this.props.config,
				slots: this.props.slots,
				isolatedComponent: this.props.isolatedComponent,
				isolatedExample: this.props.isolatedExample,
				isolatedSection: this.props.isolatedSection
			};
		}
	}, {
		key: 'render',
		value: function render() {
			//console.log(this.props.config);
			var _props = this.props,
			    config = _props.config,
			    sections = _props.sections,
			    welcomeScreen = _props.welcomeScreen,
			    patterns = _props.patterns,
			    nav = _props.nav,
			    isolatedComponent = _props.isolatedComponent;


			if (welcomeScreen) {
				return React.createElement(Welcome, { patterns: patterns });
			}

			var sectionsToRender = sections.map(function (page) {
				var sectionSlug = page.sections.map(function (section) {
					return section.slug;
				});
				if (document.location.hash.substr(1, document.location.hash.length - 1).split('--')[0] === page.slug) {
					var arr = [page];
					return sectionsToRender = React.createElement(Sections, { key: document.location.hash, sections: arr, root: true });
				} else {
					return null;
				}
			});

			var allNull = true;
			for (var i = 0; i < sectionsToRender.length; i++) {
				if (sectionsToRender[i] !== null) {
					allNull = false;
				}
			}
			if (allNull) {
				var arr = [sections[0]];
				sectionsToRender = React.createElement(Sections, { key: document.location.hash, sections: arr, root: true });
			}
			if (config.logoPath === undefined) {
				config.logoPath = false;
			}
			return React.createElement(
				StyleGuideRenderer,
				{
					title: config.title,
					homepageUrl: HOMEPAGE,
					toc: React.createElement(TableOfContents, { sections: sections, title: config.title }),
					hasSidebar: config.showSidebar && !isolatedComponent
					//sidebar={(isEmpty(components) && (isEmpty(sections) || sections.length === 0)) ? false : sidebar}
					, nav: nav || false,
					logo: config.logoPath
				},
				sectionsToRender
			);
		}
	}]);

	return StyleGuide;
}(Component);

StyleGuide.propTypes = {
	codeRevision: PropTypes.number.isRequired,
	config: PropTypes.object.isRequired,
	slots: PropTypes.object.isRequired,
	sections: PropTypes.array.isRequired,
	welcomeScreen: PropTypes.bool,
	patterns: PropTypes.array,
	isolatedComponent: PropTypes.bool,
	isolatedExample: PropTypes.bool,
	isolatedSection: PropTypes.bool
};
StyleGuide.childContextTypes = {
	codeRevision: PropTypes.number.isRequired,
	config: PropTypes.object.isRequired,
	slots: PropTypes.object.isRequired,
	isolatedComponent: PropTypes.bool,
	isolatedExample: PropTypes.bool,
	isolatedSection: PropTypes.bool
};
StyleGuide.defaultProps = {
	isolatedComponent: false
};
export default StyleGuide;