import config from 'src/config/app.config';
import TableList from './table-list';

class TableListWrapper extends React.Component {
    constructor (props) {
        super(props);
        this.ws = new WebSocket(config.tablesSource);
        this.ws.onopen = () => {
            console.info('Connection opened!');
            this.ws.send('Hello!');
        };
        this.ws.onclose = () => console.info('Connection closed!');
        this.ws.onerror = () => console.error('Error!');
        this.ws.onmessage = this.onMessage.bind(this);
    }

    componentWillMount () {
        //TODO: remove when original source ready
        const mockTables = [
            { name: '007' },
            { name: '009' },
            { name: '008' }
        ];
        this.setState({ tables: mockTables });
    }

    onMessage (event) {
        console.log('On message:', event);
    }

    render () {
        return <TableList tables={this.state.tables} />;
    }
}

export default TableListWrapper;
