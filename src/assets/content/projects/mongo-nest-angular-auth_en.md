This project started out as a much bigger application, called "TripPlanner", however after a while - probably thanks
to *dear* COVID and all the travel bans - unfortunately I lost motivation and started to work on other things.

However I already implemented quite a few nice and handy tricks on both back- and frontend, so I didn't want all of
those go to waste. Just a few to name:

### Features implemented

- **Backend:**
    - A fully functional authentication system based on JWT
        - Registration using email and password
        - Authentication
        - Password reset email
        - Token refresh
        - Authorization
    - User profile and other entity management with validations on both ends
    - Swagger API docs
    - API integration and end-to-end tests


- **Frontend:**
    - A nice Material UI
    - Internationalization (I18n)
    - Lazy loaded modules
    - Custom RX based state management
    - Image upload to Firebase storage
    - Unit and component tests

### Technologies used

- **Frontend:**
    - TypeScript
    - Angular 11
    - Firebase (AngularFire)
    - Angular Material
    - Karma + Jasmine for testing
    - Static hosting with FTP deploy script


- **Backend:**
    - TypeScript
    - NestJS
    - MongoDB + Mongoose
    - JWT (Passport)
    - Swagger UI (OpenAPI)
    - Supertest + Chai + Mocha for testing
    - Google App Engine for hosting


- **Code quality:**
    - Eslint
    - Prettier

---
### Code:
- Frontend + Backend monorepo: [click here](https://github.com/KinPeter/Mongo-Nest-Angular-Auth)
