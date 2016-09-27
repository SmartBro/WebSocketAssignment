import styles from './table-list.scss';
import Table from '../table';

class TableList extends React.Component {
    render () {
        return <div className={styles['table-list']}>
                {this.props.tables.map((table, index) => <Table tableName={table.name} key={index} />)}
            </div>;
    }
}

export default TableList;
