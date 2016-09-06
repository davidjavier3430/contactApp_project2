var csv = require('csv');
var fs = require('fs');
var prompt = require('prompt-sync')();

function updateContact() {
  fs.readFile('example.csv', function(err, data) {
    csv.parse(data, { columns: true }, function(err, data) {

      var contactValue = String(prompt("Enter a email of the contact you want to Update: "));

    //   var upfirst_name = String(prompt("first name: "));
    //   var uplast_name = String(prompt("last name: "));
    //   var upphone = String(prompt("Phone Number: "));
    //   var upemail = String(prompt("Email: "));
    //   var upcity = String(prompt("City: "));
    //   var upzipcode = String(prompt("Zipcode: "));
    //   var upwebsite = String(prompt("Website: "));
    //   var upcompany = String(prompt("Company Name: "));
     //
    //   contactNew = {
    //   first_name: first_name,
    //   last_name:  last_name,
    //   phone:      phone,
    //   email:      email,
    //   city:       city,
    //   zipcode:    zipcode,
    //   website:    website,
    //   company:    company
    //  };


      csv.transform(data, function(row) {
        console.log(data);
        return row;
      }, function(err, data) {
        csv.stringify(data, { header: true }, function(err, data) {
          fs.writeFile('example.csv', data, function(error) {
            if (error) {
              throw error;
            }
            console.log('New Contact was successful');
          });
        });
      });
    });
  });
}

module.exports = updateContact;
