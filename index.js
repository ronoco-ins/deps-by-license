#!/usr/bin/env node

// var program = require('commander');
var path = require('path');
var checker = require('license-checker');

// program.version('0.1.0')
//   .option('-i, --input', 'input directory', path.join(__dirname, './'))
//   .option('-o, --output', 'output file to save json to', null);
// program.parse();


checker.init({
  start: '.'
}, (err,sorted) => {
  const output = Object.keys(sorted).reduce(
    (result,val) => {
      if(result[sorted[val]['licenses']] == null) {
        result[sorted[val]['licenses']] = [];
      }
      result[sorted[val]['licenses']].push(val);
      return result;
    },{});
  console.log(output)
});
