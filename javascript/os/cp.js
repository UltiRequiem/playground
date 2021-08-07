const { copyFile } = require('fs');

function copy(file, newPath) {
  copyFile(file.replace('~', process.env.HOME), newPath, (err) =>
    err ? console.error(err) : console.log('Done!')
  );
}

module.exports = copy;
