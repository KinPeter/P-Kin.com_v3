Webes alkalmazás Docker konténerek naplóinak valós idejű megtekintésére és követésére. Egyszerű, biztonságos felületet biztosít a futó konténerek listázására, naplóik élő közvetítésére WebSocketeken keresztül, valamint a napló kimenet szűrésére vagy követésére közvetlenül a böngészőből.

## Funkciók

- **Docker konténerek listázása**: Az összes Docker konténer megtekintése, amely a szerveren fut, beleértve a nevüket, azonosítójukat és állapotukat.
- **Élő log streaming**: A logok követése bármely konténerből valós időben WebSocketek használatával.
- **Log tailing**: Adja meg, hogy hány sort szeretne követni, és szűrje a logokat közvetlenül a felhasználói felületről.
- **Biztonságos API hozzáférés**: API kulcs alapú hitelesítéssel védett.
- **Egyszerű webes UI**: Könnyű, reszponzív felület, amelyet vanilla HTML, CSS és JavaScript segítségével épült.
- **Többplatformos támogatás**: Könnyen futtatható helyben Docker Compose-szal, vagy telepíthető bármely Linux szerverre.

## Használt technológiák

- Python és FastAPI
- WebSockets
- Docker SDK
- Docker és Docker-compose
- Egyszerű HTML, CSS és vanilla JS a UI-hoz

--- 
A kódot megtalálod [itt](https://github.com/KinPeter/servlogs).