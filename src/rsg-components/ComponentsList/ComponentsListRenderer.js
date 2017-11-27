import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'rsg-components/Link';
import Styled from 'rsg-components/Styled';
import { goToAnchor } from 'react-scrollable-anchor';

const styles = ({ color, fontFamily, fontSize, space, mq }) => ({
	list: {
		margin: 0,
		//paddingLeft: space[2],
	},
	item: {
		color: color.base,
		display: 'block',
		//padding:'5px 0px 5px 16px',
		fontFamily: fontFamily.base,
		fontSize: fontSize.base,
		listStyle: 'none',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	section: {
		color: color.base,
		display: 'block',
		padding: [[0, 0, 0, space[2]]],
		fontFamily: fontFamily.base,
		fontSize: fontSize.base,
		listStyle: 'none',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	isChild: {
		[mq.small]: {
			display: 'inline-block',
			margin: [[0, space[1], 0, 0]],
		},
	},
	heading: {
		color: color.base,
		marginTop: space[1],
		fontFamily: fontFamily.base,
		fontWeight: 'bold',
	},
	onNowSection: {
		fontWeight: '500!important '
	},

});

export function ComponentsListRenderer({ classes, items }) {

	items = items.filter(item => item.name);

	if (!items.length) {
		return null;
	}

	const menu =  (
		<ul className={classes.list}>
		{
			items.map(item => {
				let subSections = [];
				if(item.sections)
				{
					subSections = item.sections.map(section =>{
						const sectionList = (
						<ul key={section.name} className={cx(classes.section, (!item.content) && classes.isChild)} >
							<li>
								<Link className={cx(item.slug === location? item.heading && classes.heading : item.heading && classes.heading && classes.onNow)} href={`${window.location.href.split('#')[0]}#${item.slug}--${section.slug}`}>
									{section.name}
								</Link>
							</li>
						</ul>
						)
						return sectionList;
					})
				}
				const listItem =  (
					<li
						className={cx(classes.item , (!item.content) && classes.isChild)}
						key={item.name}
					>

						<Link className={ cx(classes.onNowSection)} href={`#${item.slug}`} section={true}>
							{item.name}
						</Link>
						{item.content}
						{subSections}
					</li>
				)

				return listItem;
			})
		}
		</ul>
	);
	return menu;
}

ComponentsListRenderer.propTypes = {
	items: PropTypes.array.isRequired,
	classes: PropTypes.object.isRequired,
};

export default Styled(styles)(ComponentsListRenderer);
