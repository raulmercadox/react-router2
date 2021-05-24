import {NavLink} from "react-router-dom";
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
    return <header className={styles.header}>
        <div className={styles.logo}>My Logo</div>
        <nav className={styles.nav}>
            <ul>
                <li><NavLink to="/quotes" activeClassName={styles.active}>All Quotes</NavLink></li>
                <li><NavLink to="/new-quote" activeClassName={styles.active}>New Quote</NavLink></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;