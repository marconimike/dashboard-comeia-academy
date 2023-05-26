import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <NavLink to="/" className={styles.active}>
                            <h3>Home</h3>
                        </NavLink>
                    </li>
                </ul>
                <h3>Currículo</h3>
                <ul>
                    <li>
                        <NavLink to="/curriculo/informacoes/cadastro" className={styles.active}>
                            Cadastrar Informações
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculo/experiencia/cadastro" className={styles.active}>
                            Cadastrar Experiência
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculo/experiencia/lista" className={styles.active}>
                            Lista de Experiências
                        </NavLink>
                    </li>
                </ul>
                
                <h3>Portfólio</h3>
                <ul>
                    <li>
                        <NavLink to="/portfolio/cadastro" className={styles.active}>
                            Cadastrar Portfólio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/lista" className={styles.active}>
                            Lista de Portfólio
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Sidebar;