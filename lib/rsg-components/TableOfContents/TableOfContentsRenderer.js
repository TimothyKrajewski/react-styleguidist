import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';

var styles = function styles(_ref) {
	var space = _ref.space,
	    color = _ref.color,
	    fontFamily = _ref.fontFamily,
	    fontSize = _ref.fontSize,
	    borderRadius = _ref.borderRadius;
	return {
		root: {
			fontFamily: fontFamily.base
		},
		search: {
			paddingLeft: space[2],
			paddingRight: space[2],
			paddingBottom: space[2]
		},
		input: {
			display: 'block',
			width: '100%',
			padding: space[1],
			color: color.base,
			backgroundColor: color.baseBackground,
			fontFamily: fontFamily.base,
			fontSize: fontSize.base,
			border: [[1, color.border, 'solid']],
			borderRadius: borderRadius,
			transition: 'border-color ease-in-out .15s',
			backgroundImage: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20id%3D%22a%22%20d%3D%22M11.998%200v11.998H0V0h11.998z%22/%3E%0A%20%20%20%20%3C/defs%3E%0A%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%282%202%29%22%3E%0A%20%20%20%20%20%20%20%20%3Cmask%20id%3D%22b%22%20fill%3D%22%23fff%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23a%22/%3E%0A%20%20%20%20%20%20%20%20%3C/mask%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%239B9B9B%22%20d%3D%22M1.54%204.848A3.312%203.312%200%200%201%204.848%201.54a3.312%203.312%200%200%201%203.308%203.308%203.312%203.312%200%200%201-3.308%203.309A3.312%203.312%200%200%201%201.54%204.848m10.382%205.623L8.921%207.469a4.818%204.818%200%200%200%20.776-2.62A4.854%204.854%200%200%200%204.848%200%204.853%204.853%200%200%200%200%204.848a4.853%204.853%200%200%200%204.848%204.849c.965%200%201.864-.287%202.62-.776l3.002%203.002c.1.1.264.1.363%200l1.09-1.089c.1-.1.1-.263%200-.363%22%20mask%3D%22url%28%23b%29%22/%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E)',
			backgroundPosition: '130px',
			backgroundRepeat: 'no-repeat',
			'&:focus': {
				isolate: false,
				borderColor: color.link,
				outline: 0
			},
			'&::placeholder': {
				isolate: false,
				fontFamily: fontFamily.base,
				fontSize: fontSize.base,
				color: color.light
			}
		},
		title: {
			margin: '63px 0px 15px 23px',
			height: '13px',
			fontFamily: 'SourceSansPro',
			fontSize: '13px',
			lineHeight: '1',
			textAlign: 'left',
			color: '#333333'
		}
	};
};

export function TableOfContentsRenderer(_ref2) {
	var classes = _ref2.classes,
	    children = _ref2.children,
	    searchTerm = _ref2.searchTerm,
	    onSearchTermChange = _ref2.onSearchTermChange,
	    title = _ref2.title;


	return React.createElement(
		'div',
		null,
		React.createElement(
			'div',
			{ className: classes.root },
			React.createElement(
				'p',
				{ className: classes.title },
				' ',
				title,
				' '
			),
			React.createElement(
				'div',
				{ className: classes.search },
				React.createElement('input', {
					value: searchTerm,
					className: classes.input,
					placeholder: 'Filter by name',
					onChange: function onChange(event) {
						return onSearchTermChange(event.target.value);
					}
				})
			),
			children
		)
	);
}

TableOfContentsRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node,
	searchTerm: PropTypes.string.isRequired,
	onSearchTermChange: PropTypes.func.isRequired,
	title: PropTypes.string
};

export default Styled(styles)(TableOfContentsRenderer);