![pkincom](https://stuff.p-kin.com/screentogif/pkincom-full.gif)

Életem legelső VueJS projektjének egy új saját portfólió oldal készétését választottam. A célom az volt, hogy minél egyszerűbben láthassa bárki a munkáimat, akit érdekel.

[>> Megnézheted itt!](https://v2.p-kin.com)

### Funkciók:

- **About me & my skills -** A főoldal némi bemutatkozást és az általam ismert nyelvek, techológiák felsorolását tartalmazza.

- **Portfolio -** Az összes említésre méltó projektem rövid leírása, linkek a repository-khoz.

- **Pens -** Néhány munkám a CodePen-en, főként animációk.

## Backstage

Egyedi, dashboard-szerű alkalmazás amivel a weboldalam tartalmát módosíthatom.

### Funkciók:

- **Tartalom kezelés -**
Az alkalmazás teljes kontrollt ad afelett, mi látható a weboldalamon. Hozzáadhatok, módosíthatok vagy törölhetek bármit az adatok közül, melyek a Firebase adatbázisában vannak, és a változások azonnal megjelennek a portfólió oldalon.

- **Material Design a Vuetify-al -**
A Vuetify-nak köszönhetően igazán könnyű egy szép és könnyen kezelhető felhasználói felület készítése, akár egy sor CSS írása nélkül is.

### Skills szekció:

![skills](https://stuff.p-kin.com/screentogif/backstage-skills.gif) 

### Portfolio szekció:

![skills](https://stuff.p-kin.com/screentogif/backstage-portfolio.gif) 


### Használt technológiák:
- Vue
- TypeScript
- Vuex
- SCSS
- Firebase REST APIs

### Használt metódusok:
- **Központi állapot kezelés -**
Az első próbálkozásaim 'state management' területén: minden adat és a UI állapota is külön Vuex modulokban kapott helyet.

- **Routing és lazy loading -**
A külön oldalak és tartalmak 'lazy loading'-ot használnak a jobb teljesítményért.

- **Dinamikus adat -**
Ha egy új elemet szeretnék adni a portfóliómhoz, vagy átírni a bemutatkozást, nem kell a kódhoz nyúlnom, hisz minden adatbázisból jön.

---
Repók: [Portfolio oldal](https://github.com/KinPeter/P-Kin.com_v2), [Backstage](https://github.com/KinPeter/P-Kin.com_v2-backstage)
