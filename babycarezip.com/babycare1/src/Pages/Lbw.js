import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Lbw = () => {
    const [formData, setFormData] = useState({
        mage: '',
        medu: '',
        monpre: '',
        npvis: '',
        fage: '',
        feduc: '',
        omaps: '',
        famps: '',
        cigs: '',
        drink: '',
        male: '',
        mwhte: '',
        mblck: '',
        moth: '',
        fwhte: '',
        fblck: '',
        forth: '',
    });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setLoading(true);

        const isFormComplete = Object.values(formData).every(val => val !== '');

        if (isFormComplete) {
            try {
                const response = await axios.post('http://localhost:8080/api/lbw/predict', formData);

                if (response.status === 200) {
                    const predictedWeight = response.data;
                    setMessage(`Prediction Result: ${predictedWeight.toFixed(2)} kg`);
                } else {
                    throw new Error('Unexpected response from server');
                }
            } catch (error) {
                console.error('Error during prediction', error);
                setMessage(`There was an error processing your request: ${error.message}`);
            }
        } else {
            setMessage('Please fill in all the fields.');
        }
        setLoading(false);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>LBW Prediction Form</h2>
            <p style={styles.description}>
                Low birth weight (LBW) is a significant factor in determining the health of a newborn. This tool will help assess
                the likelihood of LBW based on various health and lifestyle factors. Fill in the information below to receive an
                estimate of your baby’s birth weight.
            </p>
            <div style={styles.formContainer}>
                <form onSubmit={handleFormSubmit}>
                    {Object.keys(formFields).map((field) => (
                        <div key={field} style={styles.fieldContainer}>
                            <label htmlFor={field} style={styles.label}>{formFields[field].label}</label>
                            <input
                                type="number"
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                        </div>
                    ))}
                    <button type="submit" disabled={loading} style={styles.button}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
                <p style={styles.message}>{message}</p>
                <Link to="/" style={styles.homeLink}>
                    <h3>Home</h3>
                </Link>
            </div>
            <div>
                <center>
                    <h3>Baby Weight is less than 1500 == Low Birth Weight</h3><br />
                    <h3>Baby Weight is greater than 1500 == Normal Birth Weight</h3>
                </center>
            </div>
        </div>
    );
};

const formFields = {
    mage: { label: "Mother's Age" },
    medu: { label: "Mother's Education Level" },
    monpre: { label: "Pregnancy Starting Month" },
    npvis: { label: "Number of Prenatal Visits" },
    fage: { label: "Father's Age" },
    feduc: { label: "Father's Education Level" },
    omaps: { label: "One Minute Apgar Score" },
    famps: { label: "Five minutes Apgar Score" },
    cigs: { label: "Cigarette Use During Pregnancy" },
    drink: { label: "Alcohol Use During Pregnancy" },
    male: { label: "Baby's Gender (0 for Female, 1 for Male)" },
    mwhte: { label: "Mother's White Ethnicity ( 1 for white ,0 mblck ,0 other)"},
    mblck: { label: "Mother's Black Ethnicity ( 0 for white , 1 mblck ,0 other)" },
    moth: { label: "Mother's Other Ethencity( 0 for white ,0 mblck ,1other) "},
    fwhte: { label: "Father's White Ethnicity" },
    fblck: { label: "Father's Black Ethnicity" },
    forth: { label: "Father Other Ethencity" },
};

const styles = {
    container: { padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'Arial, sans-serif' },
    heading: { textAlign: 'center', color: '#4CAF50' },
    description: { textAlign: 'center', fontSize: '16px', color: '#555' },
    formContainer: { backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '10px' },
    fieldContainer: { marginBottom: '15px' },
    label: { fontWeight: 'bold', marginBottom: '5px', display: 'block' },
    input: { width: '100%', padding: '10px', fontSize: '14px', borderRadius: '5px', border: '1px solid #ccc' },
    button: { width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' },
    buttonDisabled: { backgroundColor: '#ccc' },
    message: { marginTop: '10px', fontSize: '16px', color: '#333', textAlign: 'center' },
    homeLink: { textDecoration: 'none', color: '#4CAF50', textAlign: 'center', display: 'block', marginTop: '20px' },
};

export default Lbw;
