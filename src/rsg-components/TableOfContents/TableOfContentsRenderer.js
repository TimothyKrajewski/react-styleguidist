import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';

const styles = ({ space, color, fontFamily, fontSize, borderRadius }) => ({
	root: {
		fontFamily: fontFamily.base,
	},
	search: {
		paddingLeft: space[2],
		paddingRight: space[2],
		paddingBottom: space[2],
	},
	input: {
		display: 'block',
		width: '100%',
		padding: space[1],
		color: color.base,
		backgroundColor: color.baseBackground,
		fontFamily: fontFamily.base,
		fontSize: fontSize.base,
		border: [[1, color.border, 'solid']],
		borderRadius,
		transition: 'border-color ease-in-out .15s',
		'&:focus': {
			isolate: false,
			borderColor: color.link,
			outline: 0,
		},
		'&::placeholder': {
			isolate: false,
			fontFamily: fontFamily.base,
			fontSize: fontSize.base,
			color: color.light,
		},
		'&:after' : {
			content:'url("search.svg")',
		}
	},
	title : {
		margin: '63px 0px 15px 23px',
		height: '13px',
		fontFamily: 'SourceSansPro',
		fontSize: '13px',
		lineHeight: '1',
		textAlign: 'left',
		color: '#333333',
	}
});

export function TableOfContentsRenderer({ classes, children, searchTerm, onSearchTermChange, title }) {

	return (
		<div>
			<div className={classes.root}>
				<p className={classes.title}> {title} </p>
				<div className={classes.search}>
					<input
						value={searchTerm}
						className={classes.input}
						placeholder="Filter by name"
						onChange={event => onSearchTermChange(event.target.value)}
					/>
				</div>
				{children}
			</div>
		</div>
	);
}

TableOfContentsRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node,
	searchTerm: PropTypes.string.isRequired,
	onSearchTermChange: PropTypes.func.isRequired,
	title: PropTypes.string,
};

export default Styled(styles)(TableOfContentsRenderer);
