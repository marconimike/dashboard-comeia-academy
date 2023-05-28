import React from "react";

import * as Yup from "yup";

import styles from "./CadastrarPortfolio.module.css"
import { Formik, Form } from "formik";
import Input from "../../../components/forms/Input";


interface FormValues {
    link: string;
    image: string;
    title: string;
}

const initialValues: FormValues = {
    link: "",
    image: "",
    title: ""
}

const validationSchema = Yup.object().shape({
    link: Yup.string().required("Campo Obrigatório"),
    image: Yup.string().required("Campo Obrigatório"),
    title: Yup.string().required("Campo Obrigatório")
});

const CadastrarPortfolio = () => {

    const onSubmit = (
        values: FormValues, {resetForm}: {resetForm: () => void} ) => {
        //Lógica de envio para o Backend
        console.log(values);
        resetForm();
        alert("Formulário enviado com sucesso!")
    }

    return (
        <div className={styles.formWrapper}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <h2 className={styles.title}>Cadastrar Portfólio</h2>
                        
                        <Input 
                            label="Link"
                            name="link"
                            errors={errors.link}
                            touched={touched.link}
                        />

                        <Input 
                            label="Imagem"
                            name="image"
                            errors={errors.image}
                            touched={touched.image}
                        />

                        <Input 
                            label="Título"
                            name="titulo"
                            errors={errors.title}
                            touched={touched.title}
                        />

                        <button type="submit" className={styles.button}>Enviar</button>


                    </Form>
                )}
            </Formik>
            
        </div>
    );
};

export default CadastrarPortfolio;