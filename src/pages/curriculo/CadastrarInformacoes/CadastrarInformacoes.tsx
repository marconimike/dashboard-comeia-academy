import React from "react";

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from "../../../components/forms/Input";
import Textarea from "../../../components/forms/Textarea";

import styles from "./CadastrarInformacoes.module.css"

interface FormValues {
    foto: string;
    nome: string;
    cargo: string;
    resumo:string;
}
const CadastrarInformacoes: React.FC = () => {
    
    const initialValues: FormValues = {
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

    const onSubmit = (values: FormValues, {resetForm}: { resetForm: () => void }) => {
        console.log(values);
        resetForm();
        alert('Formulario enviado com sucesso!');
    };
    
    return (
        <div className={styles.formWrapper}>

            <Formik 
                initialValues={initialValues}
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
        </div>
    );
};

export default CadastrarInformacoes;