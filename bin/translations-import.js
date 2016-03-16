#!/usr/bin/env node
var program            = require('commander');
var importTranslations = require('./../lib').import;

const defaults = {
  apiUrl: 'http://translations.icapps.com/api'
}

program
  .version('0.0.1')
  .option('-t, --token [value]', 'apiToken authentication token')
  .option('--api-url [value]', `api url to fetch translations from.  Default: ${defaults.apiUrl}`, defaults.apiUrl)
  .option('--seperate-categories', 'seperate translations in categories')
  .option('--destination [value]', 'translations destionation path')
  .option('--clean', 'clean import, delete all translations before writing new')
  .option('--verbose', 'get more detailed information on what is happening')
  .parse(process.argv);


return importTranslations(
  program.apiUrl,
  program.token,
  {
    seperateCategories: program.seperateCategories,
    destination: program.destination,
    clean: program.clean,
    verbose: program.verbose,
  }
);
