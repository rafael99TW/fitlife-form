import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './PaymentInfo.module.css';

const PaymentInfo = ({ onNext }) => {
    const formik = useFormik({
        initialValues: {
            paymentMethod: '',
            cardNumber: '',
            cardHolder: '',
            expirationMonth: '',
            expirationYear: '',
            cvv: '',
        },
        validationSchema: Yup.object({
            paymentMethod: Yup.string().oneOf(['Visa', 'MasterCard'], 'Selecciona un método de pago válido').required('El método de pago es obligatorio'),
            cardNumber: Yup.string().required('El número de tarjeta es obligatorio'),
            cardHolder: Yup.string().required('El nombre del titular es obligatorio'),
            expirationMonth: Yup.string().length(2, 'Debes ingresar 2 dígitos').required('El mes de caducidad es obligatorio'),
            expirationYear: Yup.string().length(2, 'Debes ingresar 2 dígitos').required('El año de caducidad es obligatorio'),
            cvv: Yup.string().required('El CVV es obligatorio'),
        }),
        onSubmit: (values) => { onNext(values); },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
            <h2 className={styles.title}>Datos de Pago</h2>

            <select
                name="paymentMethod"
                value={formik.values.paymentMethod}
                onChange={formik.handleChange}
                className={styles.inputField}
            >
                <option value="">Selecciona un método de pago</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
            </select>
            {formik.errors.paymentMethod && <p className={styles.error}>{formik.errors.paymentMethod}</p>}

            <input
                type="text"
                name="cardNumber"
                value={formik.values.cardNumber}
                onChange={formik.handleChange}
                placeholder="Número de Tarjeta"
                className={styles.inputField}
            />
            {formik.errors.cardNumber && <p className={styles.error}>{formik.errors.cardNumber}</p>}

            <input
                type="text"
                name="cardHolder"
                value={formik.values.cardHolder}
                onChange={formik.handleChange}
                placeholder="Nombre del Titular"
                className={styles.inputField}
            />
            {formik.errors.cardHolder && <p className={styles.error}>{formik.errors.cardHolder}</p>}

            <div className={styles.expirationContainer}>
                <input
                    type="text"
                    name="expirationMonth"
                    value={formik.values.expirationMonth}
                    onChange={formik.handleChange}
                    placeholder="MM"
                    maxLength="2"
                    className={styles.inputField}
                />
                <input
                    type="text"
                    name="expirationYear"
                    value={formik.values.expirationYear}
                    onChange={formik.handleChange}
                    placeholder="AA"
                    maxLength="2"
                    className={styles.inputField}
                />
            </div>
            {formik.errors.expirationMonth && <p className={styles.error}>{formik.errors.expirationMonth}</p>}
            {formik.errors.expirationYear && <p className={styles.error}>{formik.errors.expirationYear}</p>}

            <input
                type="password"
                name="cvv"
                value={formik.values.cvv}
                onChange={formik.handleChange}
                placeholder="CVV"
                className={styles.inputField}
            />
            {formik.errors.cvv && <p className={styles.error}>{formik.errors.cvv}</p>}

            <button type="submit" className={styles.button}>Siguiente</button>
        </form>
    );
};

export default PaymentInfo;
