const concat = require('concat');
const fs = require('fs-extra');

(async function build() {
  const files = [
    './dist/runtime.js',
    './dist/polyfills.js',
    './dist/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/ngxGithubButtons.js');
  await fs.copyFile(
    './dist/styles.css',
    'elements/styles.css'
  );
})();
