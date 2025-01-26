A collection of API endpoints designed as cloud functions providing backend services for my other hobby projects, like PK Start or Tripz.

The API started out to run as Netlify functions, but later I started to develop a Node server to act as a host for the functions and deploy it on my private VPS server.

### Features:
* Authentication supporting both password and email based login with JWT
* Endpoints for CRUD operations for several types of data stored in a MongoDB database
* Proxy endpoints collecting data from third party APIs
* Full data backup service
* Swagger-like simple documentation generated from Yaml file
* Common published npm package for types and utilities used across applications
* Functions can be easily published as cloud functions (e.g. on Netlify)
* Custom Node.js server to dynamically load and serve the functions as endpoints

### Technologies used:
* Node.js for API functions and custom server
* TypeScript
* MongoDB database
* Docker & Docker Compose
* DigitalOcean Droplet for hosting
* NPM for common code package
* CI/CD with GitHub workflows and git hooks
* Jest for unit testing
* Node:test for API acceptance testing

--- 
You can find the code repository [here](https://github.com/KinPeter/pk-central).
