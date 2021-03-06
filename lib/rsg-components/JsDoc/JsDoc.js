import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'rsg-components/Markdown';
import map from 'lodash/map';

var plural = function plural(array, caption) {
	return array.length === 1 ? caption : caption + 's';
};
var list = function list(array) {
	return array.map(function (item) {
		return item.description;
	}).join(', ');
};
var paragraphs = function paragraphs(array) {
	return array.map(function (item) {
		return item.description;
	}).join('\n\n');
};

var fields = {
	deprecated: function deprecated(value) {
		return '**Deprecated:** ' + value[0].description;
	},
	see: function see(value) {
		return paragraphs(value);
	},
	link: function link(value) {
		return paragraphs(value);
	},
	author: function author(value) {
		return plural(value, 'Author') + ': ' + list(value);
	},
	version: function version(value) {
		return 'Version: ' + value[0].description;
	},
	since: function since(value) {
		return 'Since: ' + value[0].description;
	}
};

export function getMarkdown(props) {
	return map(fields, function (format, field) {
		return props[field] && format(props[field]);
	}).filter(Boolean).join('\n\n');
}

export default function JsDoc(props) {
	var markdown = getMarkdown(props);
	return markdown ? React.createElement(Markdown, { text: markdown }) : null;
}

JsDoc.propTypes = {
	deprecated: PropTypes.array,
	see: PropTypes.array,
	link: PropTypes.array,
	author: PropTypes.array,
	version: PropTypes.array,
	since: PropTypes.array
};