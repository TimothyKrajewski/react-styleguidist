import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styled from 'rsg-components/Styled';

export const styles = ({ color }) => ({
	link: {
		'&, &:link,  &:visited': {
			fontSize: 'inherit',
			color: 'black',
			textDecoration: 'none',
			fontFamily: 'SourceSansPro',
			fontSize:'15px',
		},
		'&:hover &:active': {
			isolate: false,
			color: 'black',
			cursor: 'pointer',
		},
	},
	onNow: {
		fontWeight: '900!important'
	},
	itemHover:{
		display:'block',
		padding:'5px 0px 5px 116px!important',
		marginLeft: '-100px!important',
		'&:hover' : {
			display: 'block',
			padding:'5px 0px 5px 116px',
			marginLeft: '-100px',
			listStyle: 'none',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			backgroundColor:'#e2e2e2'
		}
	},
	onNowSection:{
		color: '#cf0a2c!important'
	}
});

export function LinkRenderer({ classes, section, children, onclick, ...props }) {
	let slug = props.href;
	let location;
	let flag = false;
	if(window.location.href.split('#')[1] !== undefined)
	{
		location = window.location.href.split('#')[1].split('--');
		slug = props.href.split('#')[1].split('--');
		flag = true;
	}
	const retVal = <a {...props} className={cx( flag? slug[0] === location[0]? section? classes.onNow: "" : classes.link : "" , slug.length === 2? slug[1] === location[1]? classes.onNowSection: "" :""  ,classes.link , props.className, classes.itemHover)}> {children} </a>
	return (
		retVal
	);
}

LinkRenderer.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	section: PropTypes.bool,
	classes: PropTypes.object.isRequired,
	onclick: PropTypes.string
};

export default Styled(styles)(LinkRenderer);
