import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableOfContents from 'rsg-components/TableOfContents';
import StyleGuideRenderer from 'rsg-components/StyleGuide/StyleGuideRenderer';
import Sections from 'rsg-components/Sections';
import Welcome from 'rsg-components/Welcome';
import { HOMEPAGE } from '../../../scripts/consts';

export default class StyleGuide extends Component {
	static propTypes = {
		codeRevision: PropTypes.number.isRequired,
		config: PropTypes.object.isRequired,
		slots: PropTypes.object.isRequired,
		sections: PropTypes.array.isRequired,
		welcomeScreen: PropTypes.bool,
		patterns: PropTypes.array,
		isolatedComponent: PropTypes.bool,
		isolatedExample: PropTypes.bool,
		isolatedSection: PropTypes.bool,
	};

	static childContextTypes = {
		codeRevision: PropTypes.number.isRequired,
		config: PropTypes.object.isRequired,
		slots: PropTypes.object.isRequired,
		isolatedComponent: PropTypes.bool,
		isolatedExample: PropTypes.bool,
		isolatedSection: PropTypes.bool,
	};

	static defaultProps = {
		isolatedComponent: false,
	};

	getChildContext() {
		return {
			codeRevision: this.props.codeRevision,
			config: this.props.config,
			slots: this.props.slots,
			isolatedComponent: this.props.isolatedComponent,
			isolatedExample: this.props.isolatedExample,
			isolatedSection: this.props.isolatedSection,
		};
	}

	render() {
		const { config, sections, welcomeScreen, patterns, nav, isolatedComponent } = this.props;

		if (welcomeScreen) {
			return <Welcome patterns={patterns} />;
		}

		let sectionsToRender = sections.map((page) =>{

			if(document.location.hash.substr(1, document.location.hash.length-1) === page.slug){
				let arr = [page]
				return sectionsToRender = <Sections key={document.location.hash} sections={arr} root />;
			}
			else{
				return null;
			}
		})

		let allNull = true;
		for(let i =0;  i < sectionsToRender.length; i++)
		{
			if(sectionsToRender[i] !== null)
			{
				allNull = false;
			}
		}
		if(allNull)
		{
			let arr = [sections[0]]
			sectionsToRender = <Sections key={document.location.hash} sections={arr} root />
		}
		return (
			<StyleGuideRenderer
				title={config.title}
				homepageUrl={HOMEPAGE}
				toc={<TableOfContents sections={sections} title={config.title}/>}
				hasSidebar={config.showSidebar && !isolatedComponent}
				//sidebar={(isEmpty(components) && (isEmpty(sections) || sections.length === 0)) ? false : sidebar}
				nav={nav || false}
				logo={config.logo}
			>
			{sectionsToRender}
			</StyleGuideRenderer>
		);
	}
}
