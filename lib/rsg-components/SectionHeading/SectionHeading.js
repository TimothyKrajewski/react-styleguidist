const _extends =
	Object.assign ||
	function(target) {
		for (let i = 1; i < arguments.length; i++) {
			const source = arguments[i];
			for (const key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
		return target;
	};

function _objectWithoutProperties(obj, keys) {
	const target = {};
	for (const i in obj) {
		if (keys.indexOf(i) >= 0) {
			continue;
		}
		if (!Object.prototype.hasOwnProperty.call(obj, i)) {
			continue;
		}
		target[i] = obj[i];
	}
	return target;
}

import React from 'react';
import PropTypes from 'prop-types';
import Slot from 'rsg-components/Slot';
import SectionHeadingRenderer from 'rsg-components/SectionHeading/SectionHeadingRenderer';
import { getUrl } from '../../utils/utils';

export default function SectionHeading(_ref) {
	let slotName = _ref.slotName,
		slotProps = _ref.slotProps,
		children = _ref.children,
		id = _ref.id,
		rest = _objectWithoutProperties(_ref, ['slotName', 'slotProps', 'children', 'id']);

	const href = getUrl({ slug: id, anchor: true });
	return React.createElement(
		SectionHeadingRenderer,
		_extends(
			{
				toolbar: React.createElement(Slot, { name: slotName, props: slotProps }),
				id,
				href,
			},
			rest
		),
		children
	);
}

SectionHeading.propTypes = {
	children: PropTypes.node,
	id: PropTypes.string.isRequired,
	slotName: PropTypes.string.isRequired,
	slotProps: PropTypes.object.isRequired,
	primary: PropTypes.bool,
	deprecated: PropTypes.bool,
};
