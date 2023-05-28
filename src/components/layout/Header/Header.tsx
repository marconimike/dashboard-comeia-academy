import React from 'react';

import styles from './Header.module.css';

const Header: React.FC = () => {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <h2>Dashboard do meu sistema</h2>
            </div>
        </header>
    );
};

export default Header;