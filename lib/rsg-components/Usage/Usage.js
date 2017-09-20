import React from 'react';
import PropTypes from 'prop-types';
import Props from 'rsg-components/Props';
import Methods from 'rsg-components/Methods';

export default function Usage(_ref) {
	let _ref$props = _ref.props,
		props = _ref$props.props,
		methods = _ref$props.methods;

	const propsNode = props && React.createElement(Props, { props });
	const methodsNode = methods && methods.length > 0 && React.createElement(Methods, { methods });

	if (!propsNode && !methodsNode) {
		return null;
	}

	return React.createElement('div', null, propsNode, methodsNode);
}

Usage.propTypes = {
	props: PropTypes.shape({
		props: PropTypes.object,
		methods: PropTypes.array,
	}).isRequired,
};
