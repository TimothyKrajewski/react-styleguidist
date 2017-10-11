function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'rsg-components/Logo';
import Markdown from 'rsg-components/Markdown';
import Styled from 'rsg-components/Styled';
import cx from 'classnames';

var styles = function styles(_ref) {
	var _content;

	var color = _ref.color,
	    fontFamily = _ref.fontFamily,
	    fontSize = _ref.fontSize,
	    sidebarWidth = _ref.sidebarWidth,
	    mq = _ref.mq,
	    space = _ref.space,
	    maxWidth = _ref.maxWidth;
	return {
		root: {
			color: color.base,
			backgroundColor: color.baseBackground
		},
		hasSidebar: _defineProperty({
			paddingLeft: sidebarWidth
		}, mq.small, {
			paddingLeft: 0
		}),
		content: (_content = {
			maxWidth: maxWidth,
			padding: [[space[2], space[4]]],
			margin: [[0, 'auto']]
		}, _defineProperty(_content, mq.small, {
			padding: space[2]
		}), _defineProperty(_content, 'display', 'block'), _content),
		sidebar: _defineProperty({
			backgroundColor: color.sidebarBackground,
			border: [[color.border, 'solid']],
			borderWidth: [[0, 1, 0, 0]],
			position: 'fixed',
			top: 0,
			left: 0,
			bottom: 0,
			width: sidebarWidth,
			overflow: 'auto'
		}, mq.small, {
			position: 'static',
			width: 'auto',
			borderWidth: [[1, 0, 0, 0]],
			paddingBottom: space[0]
		}),
		footer: {
			display: 'block',
			color: color.light,
			fontFamily: fontFamily.base,
			fontSize: fontSize.small
		},
		header: {
			width: "100%",
			height: "74px",
			backgroundColor: "#cf0a2c",
			position: "fixed",
			zIndex: "3",
			top: "0px"
		},
		icimsLogo: {
			width: '70px',
			height: '46px',
			objectFit: 'contain',
			margin: '14px 24px 14px 24px'
		},
		headerText: {
			fontFamily: "SourceSansPro",
			fontSize: '21px',
			lineHeight: '1.43',
			textAlign: 'left',
			color: ' #ffffff',
			display: 'inline-block',
			position: 'absolute',
			top: '24px',
			marginTop: '0',
			marginLeft: '-10px',
			textRendering: 'optimizeLegibility'
		}
	};
};

export function StyleGuideRenderer(_ref2) {
	var classes = _ref2.classes,
	    title = _ref2.title,
	    homepageUrl = _ref2.homepageUrl,
	    children = _ref2.children,
	    toc = _ref2.toc,
	    hasSidebar = _ref2.hasSidebar,
	    nav = _ref2.nav;

	return React.createElement(
		'div',
		null,
		React.createElement(
			'div',
			{ className: classes.header },
			React.createElement('img', { className: classes.icimsLogo, src: 'https://icimsinc.sharepoint.com/sites/DAM/DAM%20Assets/iCIMS%20Logo%20White%20-%20Transparent%20Background.png' }),
			React.createElement(
				'p',
				{ className: classes.headerText },
				'Styleguide'
			)
		),
		React.createElement(
			'div',
			{ className: cx(classes.root, hasSidebar && classes.hasSidebar, nav && classes.hasNav) },
			React.createElement(
				'main',
				{ className: classes.content },
				children,
				React.createElement('footer', { className: classes.footer })
			),
			hasSidebar && React.createElement(
				'div',
				{ className: classes.sidebar },
				React.createElement(
					'div',
					{ className: classes.logo },
					React.createElement(
						Logo,
						null,
						title
					)
				),
				toc
			)
		)
	);
}

StyleGuideRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	homepageUrl: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	toc: PropTypes.node.isRequired,
	hasSidebar: PropTypes.bool,
	nav: PropTypes.bool
};

export default Styled(styles)(StyleGuideRenderer);