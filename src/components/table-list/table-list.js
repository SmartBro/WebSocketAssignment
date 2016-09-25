import Table from '../table';

class TableList extends React.Component {
    render () {
        return <div className="table-list">
                {this.props.tables.map((table, index) => <Table tableName={table.name} key={index} />)}
            </div>;
    }
}

export default TableList;
