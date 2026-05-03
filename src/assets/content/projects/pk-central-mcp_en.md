An MCP (Model Context Protocol) server that exposes AI tools for interacting with my PK-Central API.

A server that brings my personal API to AI assistants like Claude Desktop or GitHub Copilot, enabling them to manage my documents, notes, flights, visits and more.

![PK-Central MCP gif](https://stuff.p-kin.com/screentogif/pk-central-mcp.gif)

### Features:
* Exposes MCP tools for most PK-Central API endpoints
* Supports both stdio and HTTP (Streamable HTTP) transport modes
* Bearer token authentication for HTTP mode
* Built with the official @modelcontextprotocol/sdk
* Zod schema validation for all tool inputs
* Docker support for production deployment

### Technologies used:
* TypeScript
* Node.js v22+
* @modelcontextprotocol/sdk
* Zod
* Express
* Docker & Docker Compose

---
You can find the code repository [here](https://github.com/KinPeter/pk-central-mcp).