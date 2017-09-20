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

const _createClass = (function() {
	function defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			const descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ('value' in descriptor) {
				descriptor.writable = true;
			}
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	return function(Constructor, protoProps, staticProps) {
		if (protoProps) {
			defineProperties(Constructor.prototype, protoProps);
		}
		if (staticProps) {
			defineProperties(Constructor, staticProps);
		}
		return Constructor;
	};
})();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError('Cannot call a class as a function');
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}
	return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== 'function' && superClass !== null) {
		throw new TypeError(
			'Super expression must either be null or a function, not ' + typeof superClass
		);
	}
	subClass.prototype = Object.create(superClass && superClass.prototype, {
		constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
	});
	if (superClass) {
		Object.setPrototypeOf
			? Object.setPrototypeOf(subClass, superClass)
			: (subClass.__proto__ = superClass);
	}
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import CodeMirror from 'react-codemirror2';
import 'codemirror/mode/jsx/jsx';

// We’re explicitly specifying Webpack loaders here so we could skip specifying them in Webpack configuration.
// That way we could avoid clashes between our loaders and user loaders.
// eslint-disable-next-line import/no-unresolved
require('!!../../../loaders/style-loader!../../../loaders/css-loader!codemirror/lib/codemirror.css');
// eslint-disable-next-line import/no-unresolved
require('!!../../../loaders/style-loader!../../../loaders/css-loader!rsg-codemirror-theme.css');

const codemirrorOptions = {
	mode: 'jsx',
	lineNumbers: false,
	lineWrapping: true,
	smartIndent: false,
	matchBrackets: true,
	viewportMargin: Infinity,
};

const UPDATE_DELAY = 10;

const Editor = (function(_Component) {
	_inherits(Editor, _Component);

	function Editor() {
		_classCallCheck(this, Editor);

		const _this = _possibleConstructorReturn(
			this,
			(Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this)
		);

		_this.handleChange = debounce(_this.handleChange.bind(_this), UPDATE_DELAY);
		return _this;
	}

	_createClass(Editor, [
		{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate() {
				return false;
			},
		},
		{
			key: 'handleChange',
			value: function handleChange(editor, metadata, newCode) {
				this.props.onChange(newCode);
			},
		},
		{
			key: 'render',
			value: function render() {
				const code = this.props.code;
				const highlightTheme = this.context.config.highlightTheme;

				const options = _extends({}, codemirrorOptions, {
					theme: highlightTheme,
				});
				return React.createElement(CodeMirror, {
					value: code,
					onValueChange: this.handleChange,
					options,
				});
			},
		},
	]);

	return Editor;
})(Component);

Editor.propTypes = {
	code: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
Editor.contextTypes = {
	config: PropTypes.object.isRequired,
};
export default Editor;
