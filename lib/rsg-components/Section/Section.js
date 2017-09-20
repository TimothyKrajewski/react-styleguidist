import React from 'react';
import PropTypes from 'prop-types';
import Examples from 'rsg-components/Examples';
import Components from 'rsg-components/Components';
import Sections from 'rsg-components/Sections';
import SectionRenderer from 'rsg-components/Section/SectionRenderer';

export default function Section(_ref, _ref2) {
	var section = _ref.section,
	    primary = _ref.primary;
	var _ref2$isolatedSection = _ref2.isolatedSection,
	    isolatedSection = _ref2$isolatedSection === undefined ? false : _ref2$isolatedSection;
	var name = section.name,
	    slug = section.slug,
	    content = section.content,
	    components = section.components,
	    sections = section.sections;


	var contentJsx = content && React.createElement(Examples, { examples: content, name: name });
	var componentsJsx = components && React.createElement(Components, { components: components });
	var sectionsJsx = sections && React.createElement(Sections, { sections: sections });

	return React.createElement(SectionRenderer, {
		name: name,
		slug: slug,
		content: contentJsx,
		components: componentsJsx,
		sections: sectionsJsx,
		isolated: isolatedSection,
		primary: primary
	});
}

Section.propTypes = {
	section: PropTypes.object.isRequired,
	primary: PropTypes.bool
};

Section.contextTypes = {
	isolatedSection: PropTypes.bool
};