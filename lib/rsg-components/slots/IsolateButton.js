import React from 'react';
import PropTypes from 'prop-types';
import MdFullscreen from 'react-icons/lib/md/fullscreen';
import MdFullscreenExit from 'react-icons/lib/md/fullscreen-exit';
import ToolbarButton from 'rsg-components/ToolbarButton';
import { getUrl } from '../../utils/utils';

const IsolateButton = function IsolateButton(_ref) {
	let name = _ref.name,
		example = _ref.example,
		isolated = _ref.isolated;
	return isolated
		? React.createElement(
				ToolbarButton,
				{ href: getUrl(), title: 'Show all components' },
				React.createElement(MdFullscreenExit, null)
			)
		: React.createElement(
				ToolbarButton,
				{ href: getUrl({ name, example, isolated: true }), title: 'Open isolated' },
				React.createElement(MdFullscreen, null)
			);
};

IsolateButton.propTypes = {
	name: PropTypes.string.isRequired,
	example: PropTypes.number,
	isolated: PropTypes.bool,
};

export default IsolateButton;
