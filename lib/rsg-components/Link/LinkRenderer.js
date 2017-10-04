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

function _defineProperty(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, {
			value,
			enumerable: true,
			configurable: true,
			writable: true,
		});
	} else {
		obj[key] = value;
	}
	return obj;
}

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styled from 'rsg-components/Styled';

export var styles = function styles(_ref) {
	const color = _ref.color;
	return {
		link: {
			'&, &:link,  &:visited': _defineProperty(
				{
					fontSize: 'inherit',
					color: 'black',
					textDecoration: 'none',
					fontFamily: 'SourceSansPro',
				},
				'fontSize',
				'15px'
			),
			'&:hover &:active': {
				isolate: false,
				color: 'black',
				cursor: 'pointer',
			},
		},
		onNow: {
			fontWeight: '900!important',
		},
	};
};

export function LinkRenderer(_ref2) {
	let classes = _ref2.classes,
		children = _ref2.children,
		props = _objectWithoutProperties(_ref2, ['classes', 'children']);

	const location = window.location.href.split('#')[1];
	const slug = props.href.split('#')[1];
	const retVal = React.createElement(
		'a',
		_extends({}, props, {
			className: cx(
				slug === location ? (props.section ? classes.onNow : '') : classes.link,
				classes.link,
				props.className
			),
		}),
		' ',
		children,
		' '
	);
	return retVal;
}

LinkRenderer.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	classes: PropTypes.object.isRequired,
};

export default Styled(styles)(LinkRenderer);
