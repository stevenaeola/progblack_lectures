// for use in server (nodejs)

const fs = require('fs');
let data = JSON.stringify([1, 2, 3]);
fs.writeFileSync('./file.json', data);
