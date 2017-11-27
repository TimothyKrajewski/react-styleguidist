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
	}
});

export function LinkRenderer({ classes, section, children, onclick, ...props }) {
	let slug = props.href;
	let location;
	if(window.location.href.split('#')[1] !== undefined)
	{
		location = window.location.href.split('#')[1].split('--')[0];
		slug = props.href.split('#')[1].split('--')[0];
	}
	const retVal = <a {...props} className={cx(slug === location? section? classes.onNow: "" : classes.link ,  classes.link , props.className, classes.itemHover)}> {children} </a>
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
