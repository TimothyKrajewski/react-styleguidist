import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styled from 'rsg-components/Styled';

import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';



export function SectionHeadingRenderer({
	classes,
	children,
	toolbar,
	id,
	href,
	primary,
	deprecated,
}) {
	configureAnchors({offset: -74, scrollDuration: 200, keepLastAnchorHash: true })
	const Tag = primary ? 'h1' : 'h2';
	const headingClasses = cx(classes.heading, {
		[classes.isPrimary]: primary,
		[classes.isDeprecated]: deprecated,
	});
	let tag =  window.location.href.split('/')[window.location.href.split('/').length-1].split('--')[0];
	if(tag.substring(1, tag.length) !== id)
	{
		tag = tag + "--" + id;
	}
	tag = tag.substring(1, tag.length);

	return (
		<Tag className={classes.root}>
		 <ScrollableAnchor id={`${tag}`}>
			<a href={href} className={headingClasses}>
				{children}
			</a>
			</ScrollableAnchor>
		</Tag>
	);
}

export const styles = ({ color, space, fontSize, fontFamily }) => ({
	root: {
		display: 'flex',
		marginBottom: space[1],
		alignItems: 'center',
	},
	heading: {
		color: color.base,
		fontSize: fontSize.h2,
		fontFamily: fontFamily.base,
		fontWeight: 'normal',
	},
	isPrimary: {
		fontSize: fontSize.h1,
	},
	isDeprecated: {
		textDecoration: 'line-through',
		color: color.light,
	},
	toolbar: {
		marginLeft: 'auto',
	},
});

SectionHeadingRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node,
	toolbar: PropTypes.node,
	id: PropTypes.string.isRequired,
	primary: PropTypes.bool,
	deprecated: PropTypes.bool,
};

export default Styled(styles)(SectionHeadingRenderer);
