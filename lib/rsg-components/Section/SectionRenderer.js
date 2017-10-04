import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import SectionHeading from 'rsg-components/SectionHeading';

const styles = function styles(_ref) {
	const space = _ref.space;
	return {
		root: {
			marginBottom: space[4],
			marginTop: '75px',
		},
	};
};

export function SectionRenderer(allProps) {
	let classes = allProps.classes,
		name = allProps.name,
		slug = allProps.slug,
		content = allProps.content,
		components = allProps.components,
		sections = allProps.sections,
		primary = allProps.primary;

	return React.createElement(
		'section',
		{ className: classes.root },
		name &&
			React.createElement(
				SectionHeading,
				{ primary, id: slug, slotName: 'sectionToolbar', slotProps: allProps },
				name
			),
		content,
		components,
		sections
	);
}

SectionRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	name: PropTypes.string,
	slug: PropTypes.string,
	content: PropTypes.node,
	components: PropTypes.node,
	sections: PropTypes.node,
	isolated: PropTypes.bool,
};

export default Styled(styles)(SectionRenderer);
