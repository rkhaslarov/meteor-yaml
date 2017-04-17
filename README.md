rkhaslarov:yaml
=================

YAML parser and serializer for MeteorJS. Converts YAML files to JSON and JS objects to YAML.

#Installation

```
meteor add rkhaslarov:yaml
```

#Usage

##Quick examples

###Convert YAML file to JSON

```js
var fs = Npm.require('fs');

try {
  var data = YAML.safeLoad(fs.readFileSync('/path/to/file.yml', 'utf8'));
  console.log(data);
} catch (e) {
  console.log(e);
}
```

###Convert JS object to YAML

```js
var data = {
  "some": "data"
}

var yml = YAML.safeDump(data);
console.log(yml);
```

