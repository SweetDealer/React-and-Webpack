import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './SearchForm.module.scss';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { search } from '../../redux/store';

const SearchForm = () => {

    useEffect(() => {
        return () => {
            dispatch(search(''));
        }
    }, []);

    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const startSearch = e => {
        e.preventDefault();
        dispatch(search(searchText));
    }

    return (
        <form onSubmit={startSearch} className={styles.searchForm}>
            <TextInput value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Search..." />
            <Button><span className="fa fa-search" /></Button>
        </form>
    );
};


export default SearchForm;