import React from "react";

import styles from "./ListaExperiencia.module.css"

interface Experiencia {
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio:string;
    anoFim:string;
}

const ListaExperiencia: React.FC = () => {
    const [experiencias, setExperiencias] = React.useState<Experiencia[]>([
        {
            titulo: "Estagio em Desenvolvimento de Software",
            descricao: "Desenvolvimento de app web React e Node.js",
            tipo: "Profissional",
            anoInicio: "2019",
            anoFim: "2020",
        },
    ]);
    
    const handleDelete = (index: number) => {
        //logica de excluir
    };

    const handleEdit = (experiencia: Experiencia) => {
        //logica de editar
    };

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Ano Início</th>
                    <th>Ano Fim</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {experiencias.map((experiencia, index) => (
                    <tr key={index}>
                        <td>{experiencia.titulo}</td>
                        <td>{experiencia.descricao}</td>
                        <td>{experiencia.tipo}</td>
                        <td>{experiencia.anoInicio}</td>
                        <td>{experiencia.anoFim}</td>
                        <td>
                            <button onClick={() => handleEdit(experiencia)}>Editar</button>
                            <button onClick={() => handleDelete(index)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListaExperiencia;