import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './PersonalDetails.module.css';

const PersonalDetails = ({ onNext }) => {
    const formik = useFormik({
        initialValues: { name: '', email: '', phone: '' },
        validationSchema: Yup.object({
            name: Yup.string().required('El nombre es obligatorio'),
            email: Yup.string().email('Introduce un email válido').required('El email es obligatorio'),
            phone: Yup.string().required('El teléfono es obligatorio'),
        }),
        onSubmit: (values) => { onNext(values); },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
            <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Nombre"
                className={styles.inputField}
            />
            {formik.errors.name && <p className={styles.error}>{formik.errors.name}</p>}
            
            <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Email"
                className={styles.inputField}
            />
            {formik.errors.email && <p className={styles.error}>{formik.errors.email}</p>}
            
            <input
                type="tel"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                placeholder="Teléfono"
                className={styles.inputField}
            />
            {formik.errors.phone && <p className={styles.error}>{formik.errors.phone}</p>}
            
            <button type="submit" className={styles.button}>Siguiente</button>
        </form>
    );
};

export default PersonalDetails;
