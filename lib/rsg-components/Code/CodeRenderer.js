import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';

const styles = function styles(_ref) {
	const fontFamily = _ref.fontFamily;
	return {
		code: {
			display: 'inline',
			fontFamily: fontFamily.monospace,
			fontSize: 'inherit',
			color: 'inherit',
			background: 'transparent',
		},
	};
};

export function CodeRenderer(_ref2) {
	let classes = _ref2.classes,
		className = _ref2.className,
		children = _ref2.children;

	return React.createElement(
		'span',
		{ className },
		React.createElement('code', { className: classes.code }, children)
	);
}

CodeRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	children: PropTypes.node,
};

export default Styled(styles)(CodeRenderer);
