# Node.js
[Page](https://nodejs.org/en/)

## How to install

Check node.js version:
> node --version

Download **16.5.0 LTS**

## Information
[Official documentation v16.x](https://nodejs.org/dist/latest-v16.x/docs/api/)

# Syntax and Use Notes

## Start

## 

## let vs const

Let is local

Const is global

## Require vs Import

[Interoperability with comonjs -- nodejs docs](https://nodejs.org/api/esm.html#esm_interoperability_with_commonjs)
[Import specifiers -- nodejs docs](https://nodejs.org/api/esm.html#esm_import_specifiers)


### import()

import() is local -- Is the same as local import (?)
### require()
```js
var myVar = require('http'); // to use built-in modules

var myVar2 = require('./myLocaModule'); // to use local modules
```

require() is global -- Is the same as import in Python

`require()` is a built-in function to include external modules that exist in separate files.
**It basically reads a JavaScript file, executes it, and then proceeds to return the *export object*`*.**
require() statement not only allows to add built-in core NodeJS modules but also community-based and local modules.

> The people always use require

require in my files...
```js
// my_file.js
  console.log('UwU');
```

```js
// main.js
  const my_file = require('./my_file.js');
```
> `node main.js`

Output:
``
UwU
``

Now, we want to use variables

```js
// my_file.js
  console.log('UwU');

  let uwu = 100000;

  module.exports.uwu = uwu;
```
```js
// main.js
  const my_file = require('./my_file.js');

  console.log(my_file.uwu);
```
> `node main.js`

Output:
```
UwU
100000
```

Also:

```js
// my_file.js
  console.log('UwU');

  module.exports.uwu = 100000;
```

---

When need a function:

```js
// my_file.js
  function say_uwu(){
    console.log('UwU');
  }

  module.exports.say_uwu = say_uwu;
```
```js
// main.js
  const my_file = require('./my_file.js');

  my_file.say_uwu;
```
> `node main.js`

Output:
```
UwU
10000
