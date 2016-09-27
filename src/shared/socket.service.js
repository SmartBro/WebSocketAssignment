import config from '../config/app.config';

class SocketService {
    constructor () {
        this.handlers = {};
        this.ws = new WebSocket(config.tablesSource);
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onclose = () => console.info('Connection closed!');
        this.ws.onerror = () => console.error('Error!');
        this.ws.onmessage = this.onMessage.bind(this);
    }

    onOpen () {
        console.info('Connection opened!');
        const loginMessage = JSON.stringify({
            $type: config.messageTypes.login,
            username: config.credentials.username,
            password: config.credentials.password
        });
        const tablesSubscribeMessage = JSON.stringify({
            $type: config.messageTypes.subscribeTables
        });

        this.ws.send(loginMessage);
        this.ws.send(tablesSubscribeMessage);
    }

    onMessage (event) {
        const data = JSON.parse(event.data);
        if (data && data.$type && data.$type in this.handlers) {
            console.log('On message:', event);
            this.handlers[data.$type](data);
        } else {
            console.info('Unhandled message:', event, data);
        }
    }

    on (type, handler) {
        this.handlers[type] = handler;
    }

    off (type) {
        delete this.handlers[type];
    }
}

export default new SocketService();
