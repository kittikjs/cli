#!/usr/bin/env node
"use strict";

const commander = require('commander');
const yaml = require('yamljs');
const Deck = require('kittik');

commander
  .arguments('<file>')
  .action(file => Deck.create(yaml.load(file)).run())
  .parse(process.argv);
