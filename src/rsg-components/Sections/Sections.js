import React from 'react';
import PropTypes from 'prop-types';
import Section from 'rsg-components/Section';
import SectionsRenderer from 'rsg-components/Sections/SectionsRenderer';

export default function Sections({ sections, root }) {
		//sections.map((section, idx) => console.log(section))
		return (
			<SectionsRenderer>
				{sections.map((section, idx) => <Section key={idx} section={section} primary={root} />)}
			</SectionsRenderer>
		);
}

Sections.propTypes = {
	sections: PropTypes.array.isRequired,
	root: PropTypes.bool,
};
