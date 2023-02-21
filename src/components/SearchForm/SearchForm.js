import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." />
            <Button text="Search" />
        </form>
    );
};


export default SearchForm;