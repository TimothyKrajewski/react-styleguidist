import React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import MdContentCopy from 'react-icons/lib/md/content-copy';
import ToolbarButton from 'rsg-components/ToolbarButton';
import Styled from 'rsg-components/Styled';

export var styles = function styles(_ref) {
	var space = _ref.space,
	    fontFamily = _ref.fontFamily,
	    fontSize = _ref.fontSize,
	    color = _ref.color;
	return {
		pathline: {
			fontFamily: fontFamily.monospace,
			fontSize: fontSize.small,
			color: color.light
		},
		copyButton: {
			marginLeft: space[0],
			border: "medium none currentColor"
		}
	};
};

export function PathlineRenderer(_ref2) {
	var classes = _ref2.classes,
	    children = _ref2.children;

	return React.createElement(
		'div',
		{ className: classes.pathline },
		children,
		React.createElement(
			ToolbarButton,
			{
				small: true,
				className: classes.copyButton,
				onClick: function onClick() {
					return copy(children);
				},
				title: 'Copy to clipboard'
			},
			React.createElement(MdContentCopy, null)
		)
	);
}

PathlineRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.string
};

export default Styled(styles)(PathlineRenderer);