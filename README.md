# @flowingcode/wc-ngx-github-buttons

Angular project for wrapping [ngx-github-buttons library components](https://github.com/scttcper/ngx-github-buttons) into Web Components using @angular/elements. 

Directory "elements" contains the result files with the compilation from Angular to Web components.

All instructions are present in this [blog post]().

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Setup
- Clone the repository
- `npm install`
- `npm start` to start the demo 
- `npm run build:elements` to build a single js file with the Angular Components compilation as Web Components.
- `npx http-server elements` to start a sample demo on how to use the new Web Components.

## License
This project is distributed under Apache License 2.0. For license terms, see LICENSE.txt.

[ngx-github-buttons](https://www.npmjs.com/package/@ctrl/ngx-github-buttons) is MIT licensed, but each set of buttons have their own license: 
<br> The mdo buttons are Licensed Apache 2
<br> The ntkme buttons are Licensed BSD 2-clause
