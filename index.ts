import * as http from 'http';

import {appSettings} from './settings/';

import {Server} from './modules/server';
import * as restV1 from './REST/api/v1/index.rest';

let apiServer = new Server(appSettings.port, restV1);

apiServer.start();

import * as swaggerJSDoc from 'swagger-jsdoc';
const swaggerDefinition = {
    info: {
        title: 'Node Swagger API',
        version: '1.0.0',
        description: 'Demonstrating how to describe a RESTful API with Swagger',
    },
    host: 'localhost:8080',
    basePath: '/api/v1/',
};

// options for the swagger docs
const options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./REST/api/v1/index.rest.ts'],
};

// initialize swagger-jsdoc
export const swaggerSpec = swaggerJSDoc(options);
/////////////////

// import App from './App.class';
//

// const port = appSettings.port;
// App.set('port', port);
//
// const server = http.createServer(App);
// server.listen(port);
// server.on('error', onError);
// server.on('listening', () => console.log(`Listening on ${port}`) );
//
// function onError(error: NodeJS.ErrnoException): void {
//     switch(error.code) {
//         case 'EADDRINUSE':
//             console.error(`${port} is already in use`);
//             process.exit(1);
//             break;
//         default:
//             throw error;
//     }
// }

