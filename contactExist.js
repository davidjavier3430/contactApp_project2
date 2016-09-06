function contactExist(data, phone, email) {
  for (var i = 0; i < data.length; i++) {
      //console.log(data[i].phone);
      if ((data[i].phone === phone) || (data[i].email === email)) {
        return console.log('true');
      } else {
        return console.log('false');
      }
  }
}

module.exports = contactExist();
