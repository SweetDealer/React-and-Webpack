import PageTitle from '../PageTitle/PageTitle';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <PageTitle>My first React App</PageTitle>
            {/* <h1 className={styles.title}>My first React App</h1> */}
            <p className={styles.subtitle}>A simple to-do app, with lists, columns and card</p>
        </div>
    );
};

export default Hero;