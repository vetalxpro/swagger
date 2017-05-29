import * as http from 'http';
import { appSettings } from './settings/';

import { Server } from './modules/server';
import * as restV1 from './REST/api/v1/index.rest';

let apiServer = new Server(appSettings.port, restV1);
apiServer.start();




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

