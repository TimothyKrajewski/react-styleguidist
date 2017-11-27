function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styled from 'rsg-components/Styled';

import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

export function SectionHeadingRenderer(_ref) {
	var _cx;

	var classes = _ref.classes,
	    children = _ref.children,
	    toolbar = _ref.toolbar,
	    id = _ref.id,
	    href = _ref.href,
	    primary = _ref.primary,
	    deprecated = _ref.deprecated;

	configureAnchors({ offset: -74, scrollDuration: 200, keepLastAnchorHash: true });
	var Tag = primary ? 'h1' : 'h2';
	var headingClasses = cx(classes.heading, (_cx = {}, _defineProperty(_cx, classes.isPrimary, primary), _defineProperty(_cx, classes.isDeprecated, deprecated), _cx));
	var tag = window.location.href.split('/')[window.location.href.split('/').length - 1].split('--')[0];
	if (tag.substring(1, tag.length) !== id) {
		tag = tag + "--" + id;
	}
	tag = tag.substring(1, tag.length);

	return React.createElement(
		Tag,
		{ className: classes.root },
		React.createElement(
			ScrollableAnchor,
			{ id: '' + tag },
			React.createElement(
				'a',
				{ href: href, className: headingClasses },
				children
			)
		)
	);
}

export var styles = function styles(_ref2) {
	var color = _ref2.color,
	    space = _ref2.space,
	    fontSize = _ref2.fontSize,
	    fontFamily = _ref2.fontFamily;
	return {
		root: {
			display: 'flex',
			marginBottom: space[1],
			alignItems: 'center'
		},
		heading: {
			color: color.base,
			fontSize: fontSize.h2,
			fontFamily: fontFamily.base,
			fontWeight: 'normal'
		},
		isPrimary: {
			fontSize: fontSize.h1
		},
		isDeprecated: {
			textDecoration: 'line-through',
			color: color.light
		},
		toolbar: {
			marginLeft: 'auto'
		}
	};
};

SectionHeadingRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node,
	toolbar: PropTypes.node,
	id: PropTypes.string.isRequired,
	primary: PropTypes.bool,
	deprecated: PropTypes.bool
};

export default Styled(styles)(SectionHeadingRenderer);