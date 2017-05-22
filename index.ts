import * as http from 'http';

import App from './App.class';
// import App from './App2.class';
// import App from './App3.class';

const port = 3000;
App.set('port', port);

const server = http.createServer(App);
server.listen(port);
server.on('error', onError);
server.on('listening', () => console.log(`Listening on ${port}`) );

function onError(error: NodeJS.ErrnoException): void {
    switch(error.code) {
        case 'EADDRINUSE':
            console.error(`${port} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

