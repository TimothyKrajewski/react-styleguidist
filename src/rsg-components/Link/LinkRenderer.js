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

});

export function LinkRenderer({ classes, children, ...props }) {
	const location = window.location.href.split('#')[1];
	const slug = props.href.split('#')[1];
	const retVal = <a {...props} className={cx(slug === location? props.section? classes.onNow: "" : classes.link ,  classes.link , props.className)}> {children} </a>
	return (
		retVal
	);
}

LinkRenderer.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	classes: PropTypes.object.isRequired,
};

export default Styled(styles)(LinkRenderer);
