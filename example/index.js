const marduk = require('marduk-sdk');

marduk.getRates().then((data) => {
  console.log(data);
});