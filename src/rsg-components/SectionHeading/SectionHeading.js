import React from 'react';
import PropTypes from 'prop-types';
import Slot from 'rsg-components/Slot';
import SectionHeadingRenderer from 'rsg-components/SectionHeading/SectionHeadingRenderer';
import { getUrl } from '../../utils/utils';

export default function SectionHeading({ slotName, slotProps, children, id, ...rest }) {
	const href = getUrl({ slug: id, anchor: true });
	return (
		<SectionHeadingRenderer
			toolbar={<Slot name={slotName} props={slotProps} />}
			id={id}	
			{...rest}
		>
			{children}
		</SectionHeadingRenderer>
	);
}

SectionHeading.propTypes = {
	children: PropTypes.node,
	id: PropTypes.string.isRequired,
	slotName: PropTypes.string.isRequired,
	slotProps: PropTypes.object.isRequired,
	primary: PropTypes.bool,
	deprecated: PropTypes.bool,
};
