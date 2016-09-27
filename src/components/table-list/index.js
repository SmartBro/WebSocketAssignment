import config from 'src/config/app.config';
import TableList from './table-list';
import socket from '../../shared/socket.service';

class TableListWrapper extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            tables: []
        };
        socket.on(config.messageTypes.tableList, data => this.setState({ tables: data.tables }));
        socket.on(config.messageTypes.tableRemoved, this.onTableRemove.bind(this));
        socket.on(config.messageTypes.tableAdded, this.onTableAdd.bind(this));
        socket.on(config.messageTypes.tableUpdated, this.onTableUpdate.bind(this));
    }

    onTableAdd (data) {
        console.log('add:', data);
        const indexAfter = _.findIndex(this.state.tables, [ 'id', data.after_id ]);
        const updatedTables = _.clone(this.state.tables);
        updatedTables.splice(indexAfter, 0, data.table);
        this.setState({ tables: updatedTables });
    }

    onTableUpdate ({ table }) {
        console.log('update:', table);
        const tableIndex = _.findIndex(this.state.tables, [ 'id', table.id ]);
        const updatedTables = _.clone(this.state.tables);
        updatedTables.splice(tableIndex, 1, table);
        this.setState({ tables: updatedTables });
    }

    onTableRemove ({ id }) {
        console.log('remove:', id);
        const tables = _.reject(this.state.tables, [ 'id', id ]);
        this.setState({ tables });
    }

    render () {
        return <TableList tables={this.state.tables} />;
    }
}

export default TableListWrapper;
