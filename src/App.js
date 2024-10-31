import React, { useState } from 'react';
import PersonalDetails from './components/PersonalDetails';
import ContactInfo from './components/ContactInfo';
import TrainingPreferences from './components/TrainingPreferences';
import PaymentInfo from './components/PaymentInfo';
import Summary from './components/Summary';

const App = () => {
    const [formData, setFormData] = useState({});
    const [step, setStep] = useState(1);

    const handleNext = (data) => {
        setFormData({ ...formData, ...data });
        setStep(step + 1);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://api.fitlife.com/registro', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Registro exitoso');
            } else {
                alert('Error al registrar');
            }
        } catch (error) {
            alert('Error al registrar: ' + error.message);
        }
    };

    return (
        <div className="App">
            <h1>FitLife - Formulario de Registro</h1>
            {step === 1 && <PersonalDetails onNext={handleNext} />}
            {step === 2 && <ContactInfo onNext={handleNext} />}
            {step === 3 && <TrainingPreferences onNext={handleNext} />}
            {step === 4 && <PaymentInfo onNext={handleNext} />}
            {step === 5 && <Summary formData={formData} onSubmit={handleSubmit} />}
        </div>
    );
};

export default App;
