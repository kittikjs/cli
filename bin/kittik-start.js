#!/usr/bin/env node
"use strict";

const commander = require('commander');
const Presentation = require('kittik/lib/Presentation').Presentation;
const fs = require('fs');

commander
  .arguments('<file>')
  .action(function (file) {
    let slides = JSON.parse(fs.readFileSync(file)).slides;
    Presentation.create(slides).run();
  })
  .parse(process.argv);
