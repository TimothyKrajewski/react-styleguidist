const _extends =
	Object.assign ||
	function(target) {
		for (let i = 1; i < arguments.length; i++) {
			const source = arguments[i];
			for (const key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
		return target;
	};

function _objectWithoutProperties(obj, keys) {
	const target = {};
	for (const i in obj) {
		if (keys.indexOf(i) >= 0) {
			continue;
		}
		if (!Object.prototype.hasOwnProperty.call(obj, i)) {
			continue;
		}
		target[i] = obj[i];
	}
	return target;
}

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styled from 'rsg-components/Styled';

export var styles = function styles(_ref) {
	const color = _ref.color;
	return {
		link: {
			'&, &:link, &:visited': {
				fontSize: 'inherit',
				color: color.link,
				textDecoration: 'none',
			},
			'&:hover, &:active': {
				isolate: false,
				color: color.linkHover,
				cursor: 'pointer',
			},
		},
	};
};

export function LinkRenderer(_ref2) {
	let classes = _ref2.classes,
		children = _ref2.children,
		props = _objectWithoutProperties(_ref2, ['classes', 'children']);

	return React.createElement(
		'a',
		_extends({}, props, { className: cx(classes.link, props.className) }),
		children
	);
}

LinkRenderer.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	classes: PropTypes.object.isRequired,
};

export default Styled(styles)(LinkRenderer);
