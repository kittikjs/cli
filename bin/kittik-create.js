#!/usr/bin/env node
"use strict";

const commander = require('commander');
const fs = require('fs');
const path = require('path');

commander
  .arguments('<file>')
  .action(file => {
    const source = path.resolve(__dirname, '../templates/presentation.yml');
    const destination = path.resolve(file.split('.').pop() === 'yml' ? file : `${file}.yml`);
    fs.createReadStream(source).pipe(fs.createWriteStream(destination));
  })
  .parse(process.argv);
