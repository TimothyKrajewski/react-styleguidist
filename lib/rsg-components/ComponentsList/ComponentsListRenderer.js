function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'rsg-components/Link';
import Styled from 'rsg-components/Styled';
import { goToAnchor } from 'react-scrollable-anchor';

var styles = function styles(_ref) {
	var color = _ref.color,
	    fontFamily = _ref.fontFamily,
	    fontSize = _ref.fontSize,
	    space = _ref.space,
	    mq = _ref.mq;
	return {
		list: {
			margin: 0
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
			textOverflow: 'ellipsis'
		},
		section: {
			color: color.base,
			display: 'block',
			padding: [[0, 0, 0, space[2]]],
			fontFamily: fontFamily.base,
			fontSize: fontSize.base,
			listStyle: 'none',
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		},
		isChild: _defineProperty({}, mq.small, {
			display: 'inline-block',
			margin: [[0, space[1], 0, 0]]
		}),
		heading: {
			color: color.base,
			marginTop: space[1],
			fontFamily: fontFamily.base,
			fontWeight: 'bold'
		},
		onNowSection: {
			fontWeight: '500!important '
		}

	};
};

export function ComponentsListRenderer(_ref2) {
	var classes = _ref2.classes,
	    items = _ref2.items;


	items = items.filter(function (item) {
		return item.name;
	});

	if (!items.length) {
		return null;
	}

	var menu = React.createElement(
		'ul',
		{ className: classes.list },
		items.map(function (item) {
			var subSections = [];
			if (item.sections) {
				subSections = item.sections.map(function (section) {
					var sectionList = React.createElement(
						'ul',
						{ key: section.name, className: cx(classes.section, !item.content && classes.isChild) },
						React.createElement(
							'li',
							null,
							React.createElement(
								Link,
								{ className: cx(item.slug === location ? item.heading && classes.heading : item.heading && classes.heading && classes.onNow), href: window.location.href.split('#')[0] + '#' + item.slug + '--' + section.slug },
								section.name
							)
						)
					);
					return sectionList;
				});
			}
			var listItem = React.createElement(
				'li',
				{
					className: cx(classes.item, !item.content && classes.isChild),
					key: item.name
				},
				React.createElement(
					Link,
					{ className: cx(classes.onNowSection), href: '#' + item.slug, section: true },
					item.name
				),
				item.content,
				subSections
			);

			return listItem;
		})
	);
	return menu;
}

ComponentsListRenderer.propTypes = {
	items: PropTypes.array.isRequired,
	classes: PropTypes.object.isRequired
};

export default Styled(styles)(ComponentsListRenderer);