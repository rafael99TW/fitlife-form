import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './TrainingPreferences.module.css';

const TrainingPreferences = ({ onNext }) => {
    const formik = useFormik({
        initialValues: { trainingType: '', goal: '', availability: '' },
        validationSchema: Yup.object({
            trainingType: Yup.string().required('Selecciona un tipo de entrenamiento'),
            goal: Yup.string().required('El objetivo es obligatorio'),
            availability: Yup.string().required('La disponibilidad es obligatoria'),
        }),
        onSubmit: (values) => { onNext(values); },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
            <h2 className={styles.title}>Preferencias de Entrenamiento</h2>

            <input
                type="text"
                name="trainingType"
                value={formik.values.trainingType}
                onChange={formik.handleChange}
                placeholder="Tipo de Entrenamiento"
                className={styles.inputField}
            />
            {formik.errors.trainingType && <p className={styles.error}>{formik.errors.trainingType}</p>}

            <input
                type="text"
                name="goal"
                value={formik.values.goal}
                onChange={formik.handleChange}
                placeholder="Objetivo"
                className={styles.inputField}
            />
            {formik.errors.goal && <p className={styles.error}>{formik.errors.goal}</p>}

            <input
                type="text"
                name="availability"
                value={formik.values.availability}
                onChange={formik.handleChange}
                placeholder="Disponibilidad"
                className={styles.inputField}
            />
            {formik.errors.availability && <p className={styles.error}>{formik.errors.availability}</p>}

            <button type="submit" className={styles.button}>Siguiente</button>
        </form>
    );
};

export default TrainingPreferences;
