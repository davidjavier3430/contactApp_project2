var csv = require('csv');
var fs = require('fs');
var prompt = require('prompt-sync')();
var colors = require('colors');

function deleteContact() {
  fs.readFile('example.csv', function(err, data) {
    csv.parse(data, { columns: true }, function(err, data) {

      var contactValue = prompt("Enter a email of the contact you want to Delete: ");

      for (var i = 0; i < data.length; i++) {
        if(data[i].email === contactValue) {
          data.splice(i);
          break;
        }
      }

      csv.transform(data, function(row) {
        return row;
      }, function(err, data) {
        csv.stringify(data, { header: true }, function(err, data) {
          fs.writeFile('example.csv', data, function(error) {
            if (error) {
              throw error;
            }
            console.log('Delete Contact was successful'.red);
          });
        });
      });
    });
  });
}

module.exports = deleteContact;
