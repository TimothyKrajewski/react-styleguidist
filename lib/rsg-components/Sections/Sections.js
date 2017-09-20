import React from 'react';
import PropTypes from 'prop-types';
import Section from 'rsg-components/Section';
import SectionsRenderer from 'rsg-components/Sections/SectionsRenderer';

export default function Sections(_ref) {
	var sections = _ref.sections,
	    root = _ref.root;


	return React.createElement(
		SectionsRenderer,
		null,
		sections.map(function (section, idx) {
			return React.createElement(Section, { key: idx, section: section, primary: root });
		})
	);
}

Sections.propTypes = {
	sections: PropTypes.array.isRequired,
	root: PropTypes.bool
};