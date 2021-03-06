import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'rsg-components/Logo';
import Markdown from 'rsg-components/Markdown';
import Styled from 'rsg-components/Styled';
import cx from 'classnames';

const styles = ({ color, fontFamily, fontSize, sidebarWidth, mq, space, maxWidth }) => ({
	root: {
		color: color.base,
		backgroundColor: color.baseBackground,
	},
	hasSidebar: {
		paddingLeft: sidebarWidth,
		[mq.small]: {
			paddingLeft: 0,
		},
	},
	content: {
		maxWidth,
		padding: [[space[2], space[4]]],
		margin: [[0, 'auto']],
		[mq.small]: {
			padding: space[2],
		},
		display: 'block',
	},
	sidebar: {
		backgroundColor: color.sidebarBackground,
		border: [[color.border, 'solid']],
		borderWidth: [[0, 1, 0, 0]],
		position: 'fixed',
		top: 0,
		left: 0,
		bottom: 0,
		width: sidebarWidth,
		overflow: 'auto',
		[mq.small]: {
			position: 'static',
			width: 'auto',
			borderWidth: [[1, 0, 0, 0]],
			paddingBottom: space[0],
		},
	},
	footer: {
		display: 'block',
		color: color.light,
		fontFamily: fontFamily.base,
		fontSize: fontSize.small,
	},
	header : {
		width:"100%",
		height:"74px",
		backgroundColor: "#cf0a2c",
		position: "fixed",
		zIndex:"3",
		top: "0px",
	},
	icimsLogo : {
		width: '70px',
		height: '46px',
		objectFit: 'contain',
		margin: '14px 24px 14px 24px',
	},
	filler : {
		width: '70px',
		height: '46px',
		display: 'inline',
		margin: '14px 24px 14px 24px',
	},
	headerText : {
		fontFamily: "SourceSansPro",
		fontSize: '21px',
		lineHeight: '1.43',
		textAlign: 'left',
		color:' #ffffff',
		display: 'inline-block',
		position:'absolute',
		top: '24px',
		marginTop:'0',
		marginLeft: '-10px',
		textRendering: 'optimizeLegibility',
	},
});

export function StyleGuideRenderer({ classes, title, homepageUrl, children, toc, hasSidebar, nav, logo }) {
	//console.log(logo);
	let imgElement = <div className={classes.filler}></div>;
	if(logo)
	{
		imgElement = <img className={classes.icimsLogo} src={logo} />
	}
	return (
		<div>
			<div className={classes.header}>
				{imgElement}
				<p className={classes.headerText}>Styleguide</p>
			</div>
			<div className={cx(classes.root, hasSidebar && classes.hasSidebar, nav && classes.hasNav)}>
				<main className={classes.content}>
					{
						children
					}
					<footer className={classes.footer}>
					</footer>
				</main>
				{hasSidebar &&
					<div className={classes.sidebar}>
						<div className={classes.logo}>
							<Logo>
								{title}
							</Logo>
						</div>

						{toc}
					</div>}
			</div>
		</div>
	);
}

StyleGuideRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	homepageUrl: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	toc: PropTypes.node.isRequired,
	hasSidebar: PropTypes.bool,
	nav: PropTypes.bool
};

export default Styled(styles)(StyleGuideRenderer);
