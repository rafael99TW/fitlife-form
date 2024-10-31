// src/components/Summary.jsx
import React from 'react';
import styles from './Summary.module.css';

const Summary = ({ formData, onSubmit }) => {
    return (
        <div className={styles.summaryContainer}>
            <h2 className={styles.title}>Resumen de Registro</h2>
            <div className={styles.infoBlock}>
                <h3>Datos Personales</h3>
                <p><strong>Nombre:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Teléfono:</strong> {formData.phone}</p>
            </div>
            <div className={styles.infoBlock}>
                <h3>Información de Contacto</h3>
                <p><strong>Dirección:</strong> {formData.address}</p>
                <p><strong>Ciudad:</strong> {formData.city}</p>
                <p><strong>Código Postal:</strong> {formData.postalCode}</p>
            </div>
            <div className={styles.infoBlock}>
                <h3>Preferencias de Entrenamiento</h3>
                <p><strong>Tipo:</strong> {formData.trainingType}</p>
                <p><strong>Objetivo:</strong> {formData.goal}</p>
                <p><strong>Disponibilidad:</strong> {formData.availability}</p>
            </div>
            <div className={styles.infoBlock}>
                <h3>Datos de Pago</h3>
                <p><strong>Método de Pago:</strong> {formData.paymentMethod}</p>
                <p><strong>Número de Tarjeta:</strong> {formData.cardNumber}</p>
            </div>
            <button onClick={onSubmit} className={styles.button}>Enviar</button>
        </div>
    );
};

export default Summary;
