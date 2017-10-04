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
	logo: {
		padding: space[2],
		borderBottom: [[1, color.border, 'solid']],
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
		backgroundColor: "#d7233e",
		position: "fixed",
		zIndex:"1",
		top: "0px",
	},
	icimsLogo : {
		width: '70px',
		height: '46px',
		objectFit: 'contain',
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
	platformWeb : {
		height: '74px',
		width: '167px',
		position: 'absolute',
		top:'0px',
		right: '248px',
		textAlign: 'center',
		'&:hover': {
			backgroundColor: '#b81229',
			height: '74px',
			width: '167px',
			position: 'absolute',
			top:'0px',
			right: '248px',
			textAlign: 'center',
		},
	},

	platformiOS: {
		height: '74px',
		width: '100px',
		position: 'absolute',
		top: '0px',
		right: '148px',
		textAlign: 'center',
		'&:hover': {
			backgroundColor: '#b81229',
			height: '74px',
			width: '100px',
			position: 'absolute',
			top: '0px',
			right: '148px',
		},
	},
	platformAndroid : {
		position: 'absolute',
		top: '0px',
		height: '74px',
		width: '148px',
		right: '0px',
		textAlign: 'center',
		'&:hover': {
			backgroundColor: '#b81229',
			top: '0px',
			height: '74px',
			width: '148px',
			right: '0px',
			position: 'absolute',
		},
	},
	platformText :{
		textAlign: 'center',
		fontFamily: 'SourceSansPro',
		fontSize: '18px',
		marginTop:'26px',
		color: '#ffffff',
	},
});

export function StyleGuideRenderer({ classes, title, homepageUrl, children, toc, hasSidebar, nav }) {
	return (
		<div>
			<div className={classes.header}>
				<img className={classes.icimsLogo} src="https://icimsinc.sharepoint.com/sites/DAM/DAM%20Assets/iCIMS%20Logo%20White%20-%20Transparent%20Background.png" />
				<p className={classes.headerText}>Styleguide</p>

				<div className={classes.platformWeb} > <p className={classes.platformText}>Responsive Web </p></div>
				<div className={classes.platformiOS}> <p className={classes.platformText}>iOS </p></div>
				<div className={classes.platformAndroid}> <p className={classes.platformText}>Android</p></div>
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
