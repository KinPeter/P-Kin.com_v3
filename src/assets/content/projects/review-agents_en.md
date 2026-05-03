An AI-powered CLI tool for automated code reviews that leverages specialized review agents to analyze code changes across multiple dimensions.

A CLI that automates code reviews by running targeted subagents based on file types and changes in your PR, branch, or commits.

![Review Agents gif](https://stuff.p-kin.com/screentogif/review-agents.gif)

### Features:
* Supports multiple AI CLI agents: Copilot, Claude, KiloCode, and OpenCode
* Multiple review modes: PR, branch, commit, commit range, and staged changes
* Automatic classification to run relevant subagents based on code changes
* Specialized subagents for JavaScript/TypeScript, Angular, NgRx, React, testing, styling, NestJS, Express, Python, docs, security, and architecture
* Jira ticket validation against acceptance criteria
* Aggregates all agent outputs into a comprehensive review summary

### Technologies used:
* JavaScript (Node.js)
* Multiple AI CLI integrations (Copilot, Claude, KiloCode, OpenCode)
* GitHub CLI for PR integration
* JIRA API for ticket validation

---
You can find the code repository [here](https://github.com/KinPeter/review-agents).