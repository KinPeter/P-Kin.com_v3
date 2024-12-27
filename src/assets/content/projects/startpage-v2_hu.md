Egy teljes újradolgozása a korábbi, jQuery-vel készült egyedi kezdőoldalnak. Az Angularban rejlő lehetőségeknek köszönhetően ezúttal lényegesen szebb, okosabb és nem utolsó sorban bővíthető is. A backendet és autentikációt a Firebase nyújtja, amihez az AngularFire SDK-t használtam.

### Funkciók:

- **Továbbfejlesztett 'Notes' -** Rövid jegyzetek készíthetőek akár csatolt linkekkel, archiválhatóak, szerkeszthetőek és persze törölhetőek.

![Startpage feature](https://stuff.p-kin.com/screentogif/startpage-notes-full.gif)

- **Parancsikon 'csempék' -** A kedvenc és leggyakrabban használt weboldalak így gyorsan elérhetőek egy elegáns animált oldalsáv segítségével.

![Startpage feature](https://stuff.p-kin.com/screentogif/startpage-tiles.gif)

- **Link adatbázis -** Tetszetős modal-ok segítségével kereshetek a mentett linkjeim között név vagy téma alapján.

![Startpage feature](https://stuff.p-kin.com/screentogif/startpage-links-full.gif)

- **DEV.to hírfolyam -** A Dev.to API-nak köszönhetően itt látom a legújabb cikkeket, vagy kereshetek a kedvenc témáim alapján.

![Startpage feature](https://stuff.p-kin.com/screentogif/startpage-devto.gif)

- **Koreai szótár -** A saját, egyedi szótár kereső motorom összekötve a Google sheet-ben tárolt szólistámmal. A keresést az Angular Material által nyújtott autocomplete funkció is segíti.

![Startpage feature](https://stuff.p-kin.com/screentogif/startpage-korean.gif)

- **Időjárás előrejelzés -**
A DarkSky API-nak és a saját készítésű SVG ikonoknak köszönhetően mindig tisztában lehetek vele, milyen lesz az idő.

- **Születésnapok -**
Megmutatja a barátaim és családom születsénapjait a következő két hétre. Az adatok egy Google sheet-ből jönnek.

- **Adatbázis backup szolgáltatás -**
Egy Node.js-ben írt Google Cloud web service képes lekérni minden adatot a Firestore adatbázisból és elküldeni azt az e-mailemre JSON formátumban.

### Használt technológiák:
- Angular
- TypeScript
- SCSS
- Firebase
- AngularFire
- Node.js
- Google App Engine

---
A kód repóért [kattints ide](https://github.com/KinPeter/Old-Code/tree/master/StartPage-2).
