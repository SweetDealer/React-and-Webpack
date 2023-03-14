import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {

    const dispatch = useDispatch();

    const toggleFavorite = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
        // setIsFavorite(true)
        console.log(props.id);
    }

    return <li className={clsx(styles.card, props.isFavorite && styles.isFavorite)}>{props.title}<span onClick={toggleFavorite} className={styles.icon + ' fa fa-star-o'}></span></li>
}

export default Card;