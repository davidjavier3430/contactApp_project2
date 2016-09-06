var csv = require('csv');
var fs = require('fs');
var prompt = require('prompt-sync')();


function searchContact() {
  fs.readFile('example.csv', function(err, data) {
        //1 This level data is a buffet
    csv.parse(data, { columns: true }, function(err, data) {
        //2 This level parse convert buffet in a object(1 object)
        var emailSearch = prompt('Enter a contact email: ');
        //console.log(data.length);
        var filterList = data.filter(function(data) {
        return data.email === emailSearch;
       });
       //console.log(typeof filterList);
       if (filterList.length >= 1) {
         return console.log(filterList);
       } else {
         return console.log('Dont find this email');
       }
    });
  });
}

module.exports = searchContact;
