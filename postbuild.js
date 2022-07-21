const fs = require('fs');
fs.readFile('./dist/index.html', 'utf8', (err, data) => {
  if (err) {
    console.log(`Postbuild Capacitor failed: ${err}`);
  } else {
    data = data.replace('/index.js', 'http://localhost:3000/index.js');
  }
  fs.writeFile('./dist/index.html', data, 'utf8', (err) => {
    if (err) {
      console.log(`Postbuild Capacitor failed: ${err}`);
    } else {
      console.log(`Postbuild Capacitor applied`);
    }
  });
});
