import Container from "../Container/Container";
import styles from "./NavBar.module.scss";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return <div className={styles.navigation}>
        <Container>
            <div className={styles.navigationRow}>
                <div className={styles.navigationIcon}><i class="fa fa-tasks"></i></div>
                <ul className={styles.navigationList}>
                    <li className={styles.navigationListItem}><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/">Home</NavLink></li>
                    <li className={styles.navigationListItem}><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/favorite">Favorite</NavLink></li>
                    <li className={styles.navigationListItem}><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/about">About</NavLink></li>
                </ul>
            </div>
        </Container>
    </div>
}

export default NavBar;