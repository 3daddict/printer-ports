# printerports.com
## A web app for 3D Printing Services and Online Ordering.

## Usage

Install [nodemon](https://github.com/remy/nodemon) globally

```
npm i nodemon -g
```

Install server and client dependencies

```
cd server
yarn install

cd client
yarn install
```

To start the server
cd server
nodemon
```
To start the client
cd client
npm start
```
Running the production build on localhost. This will create a production build, then Node will serve the app on http://localhost:5000

```
NODE_ENV=production yarn dev:server
```

