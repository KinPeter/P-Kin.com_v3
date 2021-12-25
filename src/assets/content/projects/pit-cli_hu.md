Hasznos kis parancssoros alkalmazás ami a gyakran végzett Git, Docker és Jira műveleteket hivatott segíteni. 

### Funkciók:
- Config fájl kezelés - felhasználói adatok és Jira projekt információk kezelése egy központi fájlból
- Git:
  - Helyi branchek törlése menüválasztóval vagy automata móddal
  - Branch kicsekkolása issue szám alapján vagy menüből
  - Egy adott távoli branch kicsekkolása issue szám alapján - code review-hoz
  - Rövid parancsok a főbb branchek eléréséhez illetve frissítéséhez
  - Git felhasználó beállítása a config fájl alapján projekt vagy global szinten
- Docker:
  - Konténerek, image-ek és volume-ok törlése menüválasztóval
- Jira:
  - Alapvető infók letöltése issue szám alapján a Jira cloud-ról
  - Új branch létrehozása az issue nevének felhasználásával

### Használt technológiák:
- TypeScript
- Node.js

---
A kódért [kattints ide](https://github.com/KinPeter/Pit-CLI)
