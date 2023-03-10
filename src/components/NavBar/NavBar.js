import Container from "../Container/Container";
import styles from "./NavBar.module.scss"

const NavBar = () => {
    return <div className={styles.navigation}>
        <Container>
            <div className={styles.navigationRow}>
                <div className={styles.navigationIcon}><i class="fa fa-tasks"></i></div>
                <ul className={styles.navigationList}>
                    <li><a className={styles.navigationListItem} href="#/">Home</a></li>
                    <li><a className={styles.navigationListItem} href="#/favorite">Favorite</a></li>
                    <li><a className={styles.navigationListItem} href="#/about">About</a></li>
                </ul>
            </div>
        </Container>
    </div>
}

export default NavBar;