This app lets you sync your Strava activities, store them in a database, and visualize your routes on an interactive map in your browser.

## Features

- **Strava Sync:** Import your activities (Walk, Run, Ride) from Strava, including GPS route data.
- **Filtering:** Filter activities by date range and activity type.
- **Map Visualization:** See all your routes on a map.
- **Efficient Data Handling:** Coordinates are deduplicated and precision-reduced for performance.
- **API Documentation:** Interactive Swagger UI docs for all endpoints.
- **Docker Support:** Easy scripts for running a development MongoDB instance.

## Technologies used

- Python with FastAPI
- Pydantic
- MongoDB
- Strava API
- Docker with Docker-compose
- Simple HTML, CSS and vanilla JS for UI
- Leaflet map with Leaflet.heat