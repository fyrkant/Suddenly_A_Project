# Suddenly_A_Project

This is an application that gets data from Sveriges Radio (swedish public service radio) about present traffic jams, reindeers on the road, trains standing still (do they ever move?) - and similar information and then marks the data as markers on map.

To run locally: 

1. Clone this repository.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the webpack-dev-server.
4. Navigate your browser to `localhost:8888`. (If you have a problem with the port, look in the package.json's start script)

This project also contains a node server that does the requests to the SR API, caches the data and serves it to the client application via websockets. If you want to mess around with the server code, navigate to the `_server` folder and repeat the steps above to install dependencies and start the server. You will also have to change a few lines in `src/actions.js`, namely comment line 5 out and uncomment line 8 to connect to the local websocket instead of the external one. 

Cheers!