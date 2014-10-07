/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var moduleSource = require('./moduleSource');
var bundle = require('./bundle');
var merge = require('./merge');
var meta = require('../package.json');
var uid = require('../lib/uid');
var fs = require('fs');

responsive(
	meta,
	moduleSource(require.resolve, fs.readFileSync),
	bundle,
	merge,
	fs.writeFileSync
);

function responsive (meta, getSource, bundle, merge, write) {
	var uid, mergeData, template, buildCfg, raveBoot;

	uid = raveUid(meta);
	mergeData = {
		raveUid: uid,
		raveMain: uid + '/start',
		raveHooks: uid + '/src/hooks'
	};

	// everything in the src folder should be processed for possible
	// rave uids
	template = mergeUid('../src/_template', mergeData);
	buildCfg = mergeUid('../src/cram.json', mergeData);
	raveBoot = mergeUid('../src/rave', mergeData);

	return bundle(buildCfg).then(function (hooks) {
		var dest, files, output;

		dest = 'rave.js';

		files = {
			promise: getSource('when/es6-shim/Promise'),
			loader: getSource('es6-module-loader/lib/es6-module-loader'),
			rave: removeLicenses(raveBoot),
			hooks: removeLicenses(hooks),
			modules: ''
		};

		output = merge(template, files);

		write(dest, output);

		console.log('Built file written to ' + dest);

	});

	function mergeUid (path, mergeData) {
		return merge(getSource(path), mergeData, merge.preserveToken);
	}
}

function raveUid (meta) {
	return uid.create(meta);
}

function removeLicenses (str) {
	return str
		.replace(/\/\*\* @author.*?\*\/\s*\n?/g, '')
		.replace(/\/\*\* @license.*?\*\/\s*\n?/g, '');
}
