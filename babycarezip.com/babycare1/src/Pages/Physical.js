import React from 'react';
import { Link } from 'react-router-dom';


export default function Physical() {
    return (
        <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
            <h1 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#333' }}>Physical Wellbeing</h1>

            <h3 style={{ color: '#555', marginBottom: '20px' }}>
                <b>Introduction:</b> Physical wellbeing plays a crucial role in ensuring the health and development of both the mother and the baby. Maintaining a healthy lifestyle through balanced nutrition, regular exercise, and medical check-ups can significantly enhance physical health during motherhood.
            </h3>

            <div style={{ color: '#666', marginBottom: '30px' }}>
                <h4 style={{ fontWeight: 'bold' }}>Maintain a Balanced Diet:</h4>
                <p>A well-balanced diet rich in essential nutrients is key to supporting both mother and baby's health. Focus on consuming a variety of fruits, vegetables, whole grains, and protein sources to ensure proper nourishment.</p>

                <h4 style={{ fontWeight: 'bold' }}>Engage in Regular Exercise:</h4>
                <p>Physical activity during pregnancy and post-pregnancy can help improve circulation, reduce stress, and boost overall health. Light exercises such as walking, prenatal yoga, or swimming can be beneficial.</p>

                <h4 style={{ fontWeight: 'bold' }}>Regular Health Check-Ups:</h4>
                <p>Frequent visits to the doctor ensure that both the mother and baby are progressing healthily. Regular health check-ups also help in identifying and addressing any potential concerns early on.</p>

                <h4 style={{ fontWeight: 'bold' }}>Get Enough Rest:</h4>
                <p>Adequate rest and sleep are vital for physical recovery and energy replenishment. Ensure you are getting enough sleep and take breaks throughout the day to allow your body to rest.</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                {/* Responsive Image */}
                <img src={'/Images/physicaalwellbeing.webp'} style={{ height: '360px', width: '500px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginRight: '20px' }} alt="Wellbeing" />
                <div style={{ flex: 1, textAlign: 'center' }}>
                    <h2 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Classes on Pregnancy</h2>
                    <a href='https://www.instagram.com/anupama.vriksham?igsh=MXQ3b3J0Zzl3aWVmZA==' style={{ textDecoration: 'none' }}>
                        <button style={{ margin: '5px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Instagram Class</button>
                    </a>
                    <br />
                    <a href='https://youtu.be/DO-7AgwsJd0' style={{ textDecoration: 'none' }}>
                        <button style={{ margin: '5px', padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>YouTube Video Playlist</button>
                    </a>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link to="/wellbeing">
                    <button style={{ height: '50px', width: '120px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>Back</button>
                </Link>
            </div>
        </div>
    );
}
