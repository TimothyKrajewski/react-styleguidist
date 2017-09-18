import React from 'react';
import PropTypes from 'prop-types';
import Examples from 'rsg-components/Examples';
import Components from 'rsg-components/Components';
import Sections from 'rsg-components/Sections';
import SectionRenderer from 'rsg-components/Section/SectionRenderer';

export default function Section(_ref, _ref2) {
	let section = _ref.section,
		primary = _ref.primary;
	let _ref2$isolatedSection = _ref2.isolatedSection,
		isolatedSection = _ref2$isolatedSection === undefined ? false : _ref2$isolatedSection;
	let name = section.name,
		slug = section.slug,
		content = section.content,
		components = section.components,
		sections = section.sections;

	const contentJsx = content && React.createElement(Examples, { examples: content, name });
	const componentsJsx = components && React.createElement(Components, { components });
	const sectionsJsx = sections && React.createElement(Sections, { sections });

	return React.createElement(SectionRenderer, {
		name,
		slug,
		content: contentJsx,
		components: componentsJsx,
		sections: sectionsJsx,
		isolated: isolatedSection,
		primary,
	});
}

Section.propTypes = {
	section: PropTypes.object.isRequired,
	primary: PropTypes.bool,
};

Section.contextTypes = {
	isolatedSection: PropTypes.bool,
};
