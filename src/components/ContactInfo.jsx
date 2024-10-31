import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './ContactInfo.module.css';

const ContactInfo = ({ onNext }) => {
    const formik = useFormik({
        initialValues: { address: '', city: '', postalCode: '' },
        validationSchema: Yup.object({
            address: Yup.string().required('La dirección es obligatoria'),
            city: Yup.string().required('La ciudad es obligatoria'),
            postalCode: Yup.string().required('El código postal es obligatorio'),
        }),
        onSubmit: (values) => { onNext(values); },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
            <h2 className={styles.title}>Información de Contacto</h2>

            <input
                type="text"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                placeholder="Dirección"
                className={styles.inputField}
            />
            {formik.errors.address && <p className={styles.error}>{formik.errors.address}</p>}

            <input
                type="text"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                placeholder="Ciudad"
                className={styles.inputField}
            />
            {formik.errors.city && <p className={styles.error}>{formik.errors.city}</p>}

            <input
                type="text"
                name="postalCode"
                value={formik.values.postalCode}
                onChange={formik.handleChange}
                placeholder="Código Postal"
                className={styles.inputField}
            />
            {formik.errors.postalCode && <p className={styles.error}>{formik.errors.postalCode}</p>}

            <button type="submit" className={styles.button}>Siguiente</button>
        </form>
    );
};

export default ContactInfo;
