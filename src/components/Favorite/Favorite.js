import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { getFavoriteCard } from '../../redux/store';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

const Favorite = () => {
    const cards = useSelector(getFavoriteCard);
    let emptyMessage = ""

    if (cards.length === 0) {
        emptyMessage = "It's empty now"
    }

    return <div className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <div className={styles.column}><div className={styles.subTitle}>{emptyMessage}</div>
            <ul className={styles.cards}>            
            {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} />)}
        </ul></div>
    </div>
}

export default Favorite;