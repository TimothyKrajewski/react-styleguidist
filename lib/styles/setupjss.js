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

import { create } from 'jss';
import global from 'jss-global';
import isolate from 'jss-isolate';
import nested from 'jss-nested';
import camelCase from 'jss-camel-case';
import defaultUnit from 'jss-default-unit';
import compose from 'jss-compose';
import nonInheritedProps from './nonInheritedProps';

const createGenerateClassName = function createGenerateClassName() {
	let counter = 0;
	return function(rule) {
		return 'rsg--' + rule.key + '-' + counter++;
	};
};

const jss = create({
	createGenerateClassName,
	plugins: [
		global(),
		isolate({
			reset: _extends({}, nonInheritedProps, {
				// “Global” styles for all components
				boxSizing: 'border-box',

				// Allow inheritance because it may be set on body and should be available for user components
				fontFamily: 'inherit',
				lineHeight: 'inherit',
				fontSize: 'inherit',
			}),
		}),
		nested(),
		camelCase(),
		defaultUnit(),
		compose(),
	],
});

export default jss;
