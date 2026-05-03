Egy **MCP (Model Context Protocol) szerver**, amely AI eszközöket tesz elérhetővé a **PK-Central API**-mmal való interakcióhoz.

Egy szerver, amely elhozza a személyes API‑mat olyan AI asszisztensekhez, mint a Claude Desktop vagy a GitHub Copilot, lehetővé téve számukra a dokumentumaim, jegyzeteim, repüléseim és egyéb adataim kezelését.

![PK-Central MCP gif](https://stuff.p-kin.com/screentogif/pk-central-mcp.gif)

### Funkciók:
* MCP toolok biztosítása a legtöbb PK-Central API endpointhoz
* Stdio és HTTP (Streamable HTTP) transport módok támogatása
* Bearer token alapú autentikáció HTTP módban
* A hivatalos **@modelcontextprotocol/sdk** használatával készült
* **Zod** séma‑validáció minden tool inputhoz
* Docker támogatás production deploymenthez

### Használt technológiák:
* TypeScript
* Node.js v22+
* @modelcontextprotocol/sdk
* Zod
* Express
* Docker & Docker Compose

---

A kódot megtalálod [itt](https://github.com/KinPeter/pk-central-mcp).