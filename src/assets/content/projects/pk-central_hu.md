Cloud function elven tervezett API endpointok gyűjteménye, melyek backendet biztosítanak más hobbi projekteimhez, mint pl. a PK Start vagy a Tripz.

Az API eredetileg Netlify function-ként indult, de később egy Node szerveren kezdtem el dolgozni, hogy az szolgálja ki az endpointokat és a saját VPS szerveremen fusson.

### Funkciók:
* Jelszavas és email alapú authentikáció JWT tokenekkel
* CRUD endpointok több különböző típusú adathoz melyek MongoDB adatbázisban vannak tárolva
* Proxy endpointok külső API-król való adatok gyűjtéséhez
* Teljes biztonsági mentés a tárolt adatokról
* Swagger-szerű, egyszerű dokumentáció Yaml fájlból generálva
* Közös kód csomag NPM package-ként publikálva
* Az endpointok könnyen publikálhatók cloud function-ként (pl. Netlify-en)
* Egyedi Node.js szerver a function-ök dinamikus betöltésére és szolgáltatására mint endpointok

### Használt technológiák:
* Node.js az API function-ök és a saját szerverhez
* MongoDB adatbázis
* TypeScript
* Docker & Docker Compose
* DigitalOcean Droplet a hostinghoz
* NPM a közös kódhoz
* CI/CD GitHub workflows és git hooks segítségével
* Jest unit teszteléshez
* Node:test az API acceptance teszteléshez

--- 
A kódot megtalálod [itt](https://github.com/KinPeter/pk-central).