#!/usr/bin/env node
"use strict";

const commander = require('commander');
const pkg = require('../package.json');

commander
  .version(pkg.version)
  .command('start [file]', 'Start a presentation')
  .command('create [file]', 'Create a new presentation')
  .parse(process.argv);
