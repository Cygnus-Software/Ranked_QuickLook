# MENU

- [What is npm?](#what-is-npm)
- [Intro](#intro)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#tests)
- [Software Package Manager](#software-package-manager)
- [Example](#example)
- [Managing Dependencies](#managing-dependencies)
- [Sharing Your Software](#sharing-your-software)
- [Publishing a Package](#publishing-a-package)

# What is npm?

## Intro

    This module provides an easy and simple way to export package.json data.

## Installation

```bash
$ npm install package
```

## Usage

    var package = require('package')(module); // contains package.json data.
    var yourAwesomeModule = {};
    yourAwesomeModule.version = package.version;

## Tests

```bash
$ make test
```

## Software Package Manager

    The name npm (Node Package Manager) stems from when npm first was created as a package manager for Node.js.

    All npm packages are defined in files called package.json.

    The content of package.json must be written in JSON.

    At least two fields must be present in the definition file: name and version.

## Example

```bash
{
"name" : "foo",
"version" : "1.2.3",
"description" : "A package for fooing things",
"main" : "foo.js",
"keywords" : ["foo", "fool", "foolish"],
"author" : "John Doe",
"licence" : "ISC"
}
```

## Managing Dependencies

    npm can manage dependencies.

    npm can (in one command line) install all the dependencies of a project.

    Dependencies are also defined in package.json.

## Sharing Your Software

    If you want to share your own software in the npm registry, you can sign in at:

https://www.npmjs.com

## Publishing a Package

    You can publish any directory from your computer as long as the directory has a
    package.json file.

    Check if npm is installed:
```
C:\pm
```
    Check if you are logged in:
```bash
C:\pm whoami
```
    If not, log in:
```bash
C:\pm login
Username: <your usernamePassword: <your password```
    Navigate to your project and publish your project:
```bash
C:\Users\myuserd myproject
C:\Users\myuser\myprojectpm publish
```