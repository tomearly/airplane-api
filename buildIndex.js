const fs = require('fs');

exports.generateHTML = (html) => {
  fs.writeFile('index.html', html, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
};