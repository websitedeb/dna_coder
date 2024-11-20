#!/usr/bin/env node

const yargs = require("yargs");
const { compile } = require("../lib/genetics");
const path = require("path");
const fs = require("fs");
const clc = require("cli-color");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv))
  .option('c', {
    alias: 'input',
    describe: 'Input file to compile',
    type: 'string',
    demandOption: true
  })
  .option('o', {
    alias: 'output',
    describe: 'Output file to save the result',
    type: 'string',
    demandOption: true
  })
  .help()
  .argv;

const inputPath = path.join(process.cwd(), argv.c);
const outputPath = path.join(process.cwd(), argv.o);

if (!fs.existsSync(inputPath)) {
  console.log(clc.red.bold(`Input file does not exist: ${inputPath}`));
  process.exit(1);
}

compile(inputPath, outputPath, (err) => {
  if (err) {
    console.log(clc.red.bold("An error occurred during compilation:"), err);
    process.exit(1);
  }
  console.log(clc.green.bold("Interpreted!"));
});
