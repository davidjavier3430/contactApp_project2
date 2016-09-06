var csv = require('csv');
var fs = require('fs');
var prompt = require('prompt-sync')();
var colors = require('colors');

//var contactExist = require('./contactExist');

function newContact() {
  fs.readFile('example.csv', function(err, data) {
    csv.parse(data, { columns: true }, function(err, data) {

      var first_name = String(prompt("first name: "));
      var last_name = String(prompt("last name: "));
      var phone = String(prompt("Phone Number: "));
      var email = String(prompt("Email: "));
      var city = String(prompt("City: "));
      var zipcode = String(prompt("Zipcode: "));
      var website = String(prompt("Website: "));
      var company = String(prompt("Company Name: "));

      contactNew = {
      first_name: first_name,
      last_name:  last_name,
      phone:      phone,
      email:      email,
      city:       city,
      zipcode:    zipcode,
      website:    website,
      company:    company
     };

     data.push(contactNew);
     var contactCount = data.length;
      csv.transform(data, function(row) {
        return row;
      }, function(err, data) {
        csv.stringify(data, { header: true }, function(err, data) {
          fs.writeFile('example.csv', data, function(error) {
            if (error) {
              throw error;
            }
            console.log('New Contact was successful'.green);
            console.log('You have: ' + contactCount + ' contacts');
          });
        });
      });
    });
  });
}

module.exports = newContact;
