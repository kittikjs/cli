#!/usr/bin/env node
"use strict";

const commander = require('commander');
const pkg = require('../package.json');

commander
  .version(pkg.version)
  .command('start [file]', 'Start a presentation')
  .parse(process.argv);
