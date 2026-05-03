Egy AI‑alapú CLI eszköz automatizált code review‑khoz, amely specializált review agenteket használ a kódbeli változások többdimenziós elemzésére.

Egy CLI, amely automatizálja a code review folyamatot azáltal, hogy a PR‑edben, branchedben vagy commitjaidban lévő fájltípusok és változások alapján célzott subagenteket futtat.

![Review Agents gif](https://stuff.p-kin.com/screentogif/review-agents.gif)

### Funkciók:
* Több AI CLI agent támogatása: Copilot, Claude, KiloCode és OpenCode
* Több review mód: PR, branch, commit, commit range és staged changes
* Automatikus osztályozás a releváns subagentek futtatásához a kódbeli változások alapján
* Specializált subagentek JavaScript/TypeScript, Angular, NgRx, React, testing, styling, NestJS, Express, Python, dokumentáció, security és architecture területekre
* Jira ticket validáció az acceptance criteria alapján
* Minden agent outputjának összesítése egy átfogó review összefoglalóba

### Használt technológiák:
* JavaScript (Node.js)
* Több AI CLI integráció (Copilot, Claude, KiloCode, OpenCode)
* GitHub CLI a PR integrációhoz
* JIRA API a ticket validációhoz

---

A kód repository megtalálható [itt](https://github.com/KinPeter/review-agents).