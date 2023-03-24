import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, deleteCard } from '../../redux/cardsReducer';

const Card = props => {

    const dispatch = useDispatch();

    const toggleFavorite = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
    }

    const deleteItem = e => {
        e.preventDefault();
        dispatch(deleteCard(props.id));
    }

    return <li className={clsx(styles.card, props.isFavorite && styles.isFavorite)}>{props.title}<span><span onClick={toggleFavorite} className={styles.icon + ' fa fa-star-o ' + styles.favorite}></span><span onClick={deleteItem} className={styles.icon + ' fa fa-trash-o'}></span></span></li>
}

export default Card;