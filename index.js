var csv = require('csv');
var fs = require('fs');
var prompt = require('prompt-sync')();
var clear = require('clear');

var searchContact = require('./search');
var newContact = require('./add');
var updateContact = require('./update');
var deleteContact = require('./delete');


var argvSelect = process.argv[2];

switch (argvSelect.toLowerCase()) {
  case 'search':
    clear();
    searchContact();
    break;

  case 'add':
    clear();
    newContact();
    break;

  case 'update':
    clear();
    updateContact();
    break;

  case 'delete':
    clear();
    deleteContact();
    break;

  case 'help':
    console.log('Commands List: (Add, Delete, Search, Update, Help)');
    break;

  default:
    console.log('Enter a valid command: (Add, Delete, Search, Update, Help)');
    break;

}
