Python és FastAPI endpointok gyűjteménye, melyek backendet biztosítanak más hobbi projekteimhez, mint pl. a PK Start vagy a Tripz.

A korábbi, Node.js-ben írt PK-Central API újraírása, hogy felfedezhessem a Python világát.

### Funkciók:
* Jelszavas és email alapú authentikáció JWT tokenekkel
* CRUD endpointok több különböző típusú adathoz melyek MongoDB adatbázisban vannak tárolva
* Proxy endpointok külső API-król való adatok gyűjtéséhez
* Teljes biztonsági mentés a tárolt adatokról
* Gemini AI integráció

### Használt technológiák:
* Python
* FastAPI
* MongoDB adatbázis
* Docker & Docker Compose
* DigitalOcean Droplet a hostinghoz
* CI/CD GitHub workflows és git hooks segítségével
* pytest unit teszteléshez
* FastAPI test client az API acceptance teszteléshez

--- 
A kódot megtalálod [itt](https://github.com/KinPeter/pk-central-v2).