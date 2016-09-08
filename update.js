var csv = require('csv');
var fs = require('fs');
var prompt = require('prompt-sync')();

function updateContact() {
  fs.readFile('example.csv', function(err, data) {
    csv.parse(data, { columns: true }, function(err, data) {

      var contactValue = String(prompt("Enter a email of the contact you want to Update: "));
      var contactPosition = null;

      for (var i = 0; i < data.length; i++) {
        if(data[i].email === contactValue) {
          contactPosition = i;
          break;
        }
      }

      var upfirst_name = String(prompt("New first name: "));
      var uplast_name = String(prompt("New last name: "));
      var upphone = String(prompt("New Phone Number: "));
      var upemail = String(prompt("New Email: "));
      var upcity = String(prompt("New City: "));
      var upzipcode = String(prompt("New Zipcode: "));
      var upwebsite = String(prompt("New Website: "));
      var upcompany = String(prompt("New Company Name: "));
     //
      data[contactPosition] = {
      first_name: upfirst_name,
      last_name:  uplast_name,
      phone:      upphone,
      email:      upemail,
      city:       upcity,
      zipcode:    upzipcode,
      website:    upwebsite,
      company:    upcompany
     };

     console.log(data[contactPosition]);

      csv.transform(data, function(row) {
        console.log(data);
        return row;
      }, function(err, data) {
        csv.stringify(data, { header: true }, function(err, data) {
          fs.writeFile('example.csv', data, function(error) {
            if (error) {
              throw error;
            }
            console.log('Update Contact was successful');
          });
        });
      });
    });
  });
}

module.exports = updateContact;
