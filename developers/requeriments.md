# Requirements, languages and frameworks

- [Node.js](https://nodejs.dev/) version: `>=14.15.x`
- [npm](https://www.npmjs.com/)
- [Serverless](https://www.serverless.com/framework/docs/getting-started) version: `3.21.x`

<!-- - [Heroku CLI v7.x](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
  > heroku
- [Nodejs v16.5.0](https://nodejs.org/en/)
  > node --version
- [Express v4.x](https://expressjs.com/)
  > npm install express --save
- [Reactjs v17.0.2](https://reactjs.org/)
- Testing:
  - [React Resting Library](https://github.com/testing-library/react-testing-library)
  - [Testing recipes](https://reactjs.org/docs/testing-recipes.html)
  - [Testing environments](https://reactjs.org/docs/testing-environments.html) -->
  <!--- (https://testing-library.com/react) --->
  <!-- - [jsdom](https://github.com/jsdom/jsdom)
  - [global-jsdom](https://github.com/modosc/global-jsdom)
  - [jest](https://jestjs.io/)
  - [jest-enviroment-jsdom](https://www.npmjs.com/package/jest-environment-jsdom)
  - [Enzyme](https://enzymejs.github.io/enzyme/)
  - [ava](https://github.com/avajs/ava)
  - [mocha](https://mochajs.org/)
  - [supertest](https://github.com/visionmedia/supertest)
- [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) -->

# Instalation

Pre requeriments:

- Clone repository

**Node.js**

```bash
sudo apt-get update && sudo apt-get upgrade -y
```

```bash
sudo apt install nodejs
```

```bash
node -v
```

**npm**
```bash
sudo apt install npm
```

```bash
npm -v
```

**Serverless**

```bash
npm i -g serverless@3.21
```

**Dynamodb**

```bash
npm i && sls dynamodb install
```

Recomendation: GUI DynamoDB

```bash
npm install dynamodb-admin -g
```

```bash
dynamodb-admin
```

> http://localhost:8001/

***AWS-CLI***

```bash
sudo apt-get update
```

```bash
sudo apt-get install awscli
```

# Links

- https://www.npmjs.com/package/serverless-plugin-typescript
- https://github.com/serverless/serverless-plugin-typescript