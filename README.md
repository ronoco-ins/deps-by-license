# deps-by-license

this package relies on [license-checker](https://github.com/davglass/license-checker) by davglass.

It simply reduces the result of a call to license-checker to an object containing packages grouped by license.

### install

```shell
git clone https://github.com/ronoco-ins/deps-by-license
cd deps-by-license
npm install -g
```

### usage

enter the directory of the project you want dependencies for, and run `deps-by-license` to get a json object of all packages and package numbers, grouped by license.

Currently there are no options. To output to a file, run 
```shell
deps-by-license > someFile.json
```

