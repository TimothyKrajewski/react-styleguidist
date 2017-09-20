import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from 'rsg-components/ReactComponent';
import ComponentsRenderer from 'rsg-components/Components/ComponentsRenderer';

export default function Components(_ref) {
	var components = _ref.components;

	return React.createElement(
		ComponentsRenderer,
		null,
		components.map(function (component) {
			return React.createElement(ReactComponent, { key: component.filepath, component: component });
		})
	);
}

Components.propTypes = {
	components: PropTypes.array.isRequired
};