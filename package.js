Package.describe({
	name: 'rkhaslarov:yaml',
	version: '0.0.1',
	summary: 'A YAML parser and serializer.',
 	git: 'https://github.com/rkhaslarov/meteor-yaml'
});

Npm.depends({
  'js-yaml': '3.8.3'
});

Package.onUse(function (api) {
	api.versionsFrom('1.2.1');
	api.addFiles('lib/yml.js','server');
	api.export("YAML", ["server"]);
});