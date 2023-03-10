import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getListById, getColumnsByList } from '../../redux/store';

const List = () => {
    const columns = useSelector(state => getColumnsByList(state, 1));
    const listData = useSelector(state => getListById(state, 1));
    console.log(columns);

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>{listData.title}</h2>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <section className={styles.columns}>
                {columns.map(column =>
                    <Column
                        key={column.id}
                        {...column} />
                )}
            </section>
            <ColumnForm />
        </div>
    );
};

export default List;