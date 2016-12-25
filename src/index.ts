import * as http from 'http';
import * as debug from 'debug';

import App from './App';

debug('ts-express:server');

const port = 3000;
App.set('port', port);

const server = http.createServer(App);
server.listen(port);
server.on('listening', function() {
    console.log('listening on port 3000');
});