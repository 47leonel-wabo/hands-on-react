# React hooks deep dive

Test project created using [Parcel JS](https://parceljs.org/) as it is just for learning purpose. Therefore, in order to use `parcel`, it should be install globally in your computer.

## Steps
1 - Initialize an empty directory `npm (or yarn) init -y`
2 - Add React, and ReactDOM to the project `npm (or yarn) add react react-dom`
3 - Into `package.json` under `scripts` add following entry `"start": "parcel index.html --open"`
4 - Then, create following files
* index.js
* index.html
* App.js
* style.css (if needed)

### `index.js`

Link our logic to the ui aka html.
`
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(<App />, document.getElementById('app'))
`

### `App.js`

Pure react component (controlled, function, or class).
