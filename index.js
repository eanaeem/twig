#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const { equalSizeArray } = require("./src");

var result = equalSizeArray(JSON.parse(argv.array), argv.size);

console.log(result);
