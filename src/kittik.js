#!/usr/bin/env node

import commander from 'commander';
import pkg from '../package.json';

commander
  .version(pkg.version)
  .command('start [file]', 'Start presentation')
  .command('list', 'List of all installed shapes, themes, animations, etc...')
  .parse(process.argv);
