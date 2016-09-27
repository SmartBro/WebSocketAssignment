import styles from './table-list.scss';
import Table from '../table';

function TableList ({ tables }) {
    return <div className={styles['table-list']}>
            {tables.map((table, index) => <Table {...table} key={index} />)}
        </div>;
}

export default TableList;
