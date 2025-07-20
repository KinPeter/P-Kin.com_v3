A web-based tool for viewing and following Docker container logs in real time. It provides a simple, secure interface to list running containers, stream their logs live via WebSockets, and filter or tail log output directly from your browser.

## Features

- **List Docker containers**: View all Docker containers running on the server, including their names, IDs, and statuses.
- **Live log streaming**: Follow logs from any container in real time using WebSockets.
- **Log tailing**: Specify how many lines to tail and filter logs directly from the UI.
- **Secure API access**: Protected with API key authentication.
- **Simple web UI**: Lightweight, responsive interface built with vanilla HTML, CSS, and JavaScript.
- **Multi-platform support**: Easily run locally with Docker Compose or deploy to any Linux server.

## Technologies used

- Python with FastAPI
- Websockets
- Docker SDK
- Docker with Docker-compose
- Simple HTML, CSS and vanilla JS for UI


--- 
You can find the code repository [here](https://github.com/KinPeter/servlogs).