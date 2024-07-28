Netlify cloud functions technológián alapuló API endpointok gyűjteménye, melyek backend szolgáltatást nyújtanak más hobbi projektjeimhez, mint pl. a PK-Start vagy a Tripz.

### Funkciók:
* Jelszavas és email alapú authentikáció JWT tokenekkel
* CRUD endpointok több különböző típusú adathoz melyek MongoDB adatbázisban vannak tárolva
* Proxy endpointok külső API-król való adatok gyűjtéséhez
* Teljes biztonsági mentés a tárolt adatokról
* Swagger-szerű, egyszerű dokumentáció Yaml fájlból generálva
* Közös kód csomag NPM package-ként publikálva

### Használt technológiák:
* Node.js API Netlify cloud functionökkel
* MongoDB adatbázis
* TypeScript
* Docker & Docker Compose
* NPM a közös kódhoz
* CI/CD a Netlify CLI és git hookok segítségével
* Jest teszteléshez

--- 
A kódot megtalálod [itt](https://github.com/KinPeter/pk-central).