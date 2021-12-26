Ez a projekt egy nagyobb, utazástervező applikációnak indult, de egy idő után - vélhetően a *kedves* COVID-nak és az utazási korlátozásoknak köszönhetően - sajnos elvesztettem a motivációmat és másokon kezdtem dolgozni.

Viszont egész sok hasznos és számomra új dolgot sikerült ebben implementálnom, amit nem akartam veszni hagyni. Csak, hogy néhányat említsek:

### Implementált funkciók

#### Backend:
* Teljes, JWT-n alapuló autentikációs rendszer
  * Feliratkozás emaillel és jelszóval
  * Autentikáció
  * Jelszó helyreállító email
  * Token refresh
  * Autorizáció
* Felhasználói profil és más entitások kezelése validációkkal mindkét oldalon
* Swagger API dokumentáció
* API integrációs és end-to-end tesztek

#### Frontend:
* Szép Material UI
* Nyelvesítés (I18n)
* Lazy loaded modulok
* Egyedi RX alapú state management
* Képfeltöltés Firebase storage-ra
* Unit és komponens tesztek

### Használt technológiák

#### Frontend:
* TypeScript
* Angular 11
* Firebase (AngularFire)
* Angular Material
* Karma + Jasmine tesztekhez
* Static hosting + FTP deploy script

#### Backend:
* TypeScript
* NestJS
* MongoDB + Mongoose
* JWT (Passport)
* Swagger UI (OpenAPI)
* Supertest + Chai + Mocha tesztekhez
* Google App Engine hosting

#### Code quality:
* Eslint
* Prettier


---
### Kód:
Frontend + Backend monorepo: [katt ide](https://github.com/KinPeter/Mongo-Nest-Angular-Auth)
