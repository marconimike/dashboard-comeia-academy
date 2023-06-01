import React from "react";
import styles from "./Home.module.css";


const Home = () => {
    return (
        <div className={styles.graphic}>
            <main>
                <h1 className={styles.title}>Bem-vindo ao projeto Dashboad!</h1>
                <p> Esta é a página inicial. Navegue pelo menu na barra lateral para explorar outras seções.</p>
            </main>
        </div>
    );
};

export default Home;