import React, {useEffect, useState} from "react";

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from "../../../components/forms/Input";
import Textarea from "../../../components/forms/Textarea";

import styles from "./CadastrarInformacoes.module.css"
import { Informacoes, getInformacoes, updateInformacoes } from "../../../services/informacoesService";
import InformacoesCard from "./InformacoesCard";


const CadastrarInformacoes: React.FC = () => {

    const [informacoes, setInformacoes] = useState<Informacoes>({} as Informacoes);
    
    const initialValues: Informacoes = {
        id: 1,
        foto: '',
        nome: '',
        cargo: '',
        resumo:'',
    };
    
    const validationSchema = Yup.object().shape({
        foto: Yup.string().required('Campo obrigatorio'),
        nome: Yup.string().required('Campo obrigatorio'),
        cargo: Yup.string().required('Campo obrigatorio'),
        resumo: Yup.string().required('Campo obrigatorio'),
    });

    const fetchInformacao = async () => {
        try {
            const informacao = await getInformacoes();
            setInformacoes(informacao);
        } catch (error) {
            console.error('Erro ao buscar informações:', error);
        }
    };

    useEffect(() => {
        fetchInformacao();
    }, []);

    const onSubmit = async (values: Informacoes, {resetForm}: { resetForm: () => void }) => {
        try {
            await updateInformacoes(values);
            setInformacoes(values);
            console.log(values);
            resetForm();
            alert('Formulario enviado com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            alert('Ocorreu um erro ao enviar o formulário. Tente novamente.');

        }
    };

    const handleDelete = async () => {
        try{
            await updateInformacoes(initialValues);
            setInformacoes(initialValues);
            alert('Informaões deletadas com sucesso!');
        } catch {error} {
            console.error('Erro ao deletar informaçoẽs', error);
            alert('Ocorreu um erro ao deletar as informações. Tente novamente.');
        }
    }
    
    return (
        <div className={styles.formWrapper}>

            <Formik 
                initialValues={informacoes}
                enableReinitialize={true}
                validationSchema={validationSchema} 
                onSubmit={onSubmit}>
                {({errors, touched}) => (
                    <Form action="" className={styles.form}>

                        <h2 className={styles.formGroup}>Cadastrar Informações</h2>

                        <Input
                            label="Foto"
                            name="foto"
                            errors={errors.foto}
                            touched={touched.foto}
                        />

                        <Input
                            label="Nome"
                            name="nome"
                            errors={errors.nome}
                            touched={touched.nome}
                        />
                        
                        <Input
                            label="Cargo"
                            name="cargo"
                            errors={errors.cargo}
                            touched={touched.cargo}
                        />
                        
                        <Textarea 
                            label="Resumo"
                            name="resumo"
                            errors={errors.resumo}
                            touched={touched.resumo}
                        />

                        <button type="submit" className={styles.button}>Salvar</button>

                    </Form>
                 )}  
            </Formik>

            {informacoes &&
                Object.entries(informacoes).some(
                    ([key, value]) => key !== "id" && value.trim() !== ""
                ) && (
                    <div className={styles.cardContainer}>
                        <InformacoesCard informacoes={informacoes} />

                        <button type="button" onClick={handleDelete} className={`${styles.button} ${styles.deleteButton}`}> 
                            Deletar
                        </button>
                    </div>
                )}

        </div>
    );
};

export default CadastrarInformacoes;