#!/usr/bin/env node
"use strict";

const commander = require('commander');

commander
  .command('start [file]', 'Start a presentation')
  .command('create [file]', 'Create a new presentation')
  .parse(process.argv);
