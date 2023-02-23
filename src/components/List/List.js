import styles from './List.module.scss';
import Column from '../Column/Column'

const List = () => {
    return (
        <div className={styles.list}>
            <header className={styles.header}><h1 className={styles.title}>Things to do<span>soon</span></h1></header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <div>
                <section className={styles.columns}>
                    <Column text="Books" icon="book" />
                    <Column text="Movies" icon="film" />
                    <Column text="Games" icon="gamepad" />
                </section>
            </div>
        </div>
    );
};

export default List;