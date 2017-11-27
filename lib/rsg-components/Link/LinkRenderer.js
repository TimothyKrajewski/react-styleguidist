var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styled from 'rsg-components/Styled';

export var styles = function styles(_ref) {
	var color = _ref.color;
	return {
		link: {
			'&, &:link,  &:visited': _defineProperty({
				fontSize: 'inherit',
				color: 'black',
				textDecoration: 'none',
				fontFamily: 'SourceSansPro'
			}, 'fontSize', '15px'),
			'&:hover &:active': {
				isolate: false,
				color: 'black',
				cursor: 'pointer'
			}
		},
		onNow: {
			fontWeight: '900!important'
		},
		itemHover: {
			display: 'block',
			padding: '5px 0px 5px 116px!important',
			marginLeft: '-100px!important',
			'&:hover': {
				display: 'block',
				padding: '5px 0px 5px 116px',
				marginLeft: '-100px',
				listStyle: 'none',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				backgroundColor: '#e2e2e2'
			}
		},
		onNowSection: {
			color: '#cf0a2c!important'
		}
	};
};

export function LinkRenderer(_ref2) {
	var classes = _ref2.classes,
	    section = _ref2.section,
	    children = _ref2.children,
	    onclick = _ref2.onclick,
	    props = _objectWithoutProperties(_ref2, ['classes', 'section', 'children', 'onclick']);

	var slug = props.href;
	var location = void 0;
	var flag = false;
	if (window.location.href.split('#')[1] !== undefined) {
		location = window.location.href.split('#')[1].split('--');
		slug = props.href.split('#')[1].split('--');
		flag = true;
	}
	var retVal = React.createElement(
		'a',
		_extends({}, props, { className: cx(flag ? slug[0] === location[0] ? section ? classes.onNow : "" : classes.link : "", slug.length === 2 ? slug[1] === location[1] ? classes.onNowSection : "" : "", classes.link, props.className, classes.itemHover) }),
		' ',
		children,
		' '
	);
	return retVal;
}

LinkRenderer.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	section: PropTypes.bool,
	classes: PropTypes.object.isRequired,
	onclick: PropTypes.string
};

export default Styled(styles)(LinkRenderer);