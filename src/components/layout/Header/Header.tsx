import React from 'react';

import styles from './Header.module.css';

const Header: React.FC = () => {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <h2>Bijuido</h2>
            </div>
        </header>
    );
};

export default Header;