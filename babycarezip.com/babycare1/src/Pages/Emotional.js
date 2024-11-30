import React from 'react';
import { Link } from 'react-router-dom';


export default function Emotional() {
    return (
        <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
            <h1 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#333' }}>Emotional Wellbeing</h1>
            <h3 style={{ fontSize: '1.2em', color: '#555', marginBottom: '20px' }}>
                <b>Introduction:</b> Emotional wellbeing is crucial during motherhood, as it impacts both the mother and baby's health. Engaging in supportive relationships and prioritizing self-care can greatly enhance emotional balance.
            </h3>

            <div style={{ color: '#666' }}>
                <h4 style={{ fontWeight: 'bold' }}>Build Emotional Resilience:</h4>
                <p>Take time to acknowledge your emotions and be gentle with yourself. Becoming a mother comes with a range of feelings; it’s important to allow yourself to feel without judgment.</p>

                <h4 style={{ fontWeight: 'bold' }}>Stay Connected:</h4>
                <p>Surround yourself with positive and supportive people who can provide a listening ear and encouragement. Building strong relationships with your partner, family, and friends is essential for emotional wellbeing.</p>

                <h4 style={{ fontWeight: 'bold' }}>Engage in Self-Care:</h4>
                <p>Allocate time for self-care practices that rejuvenate your mind and soul. Activities such as journaling, meditation, or simply taking time for yourself can help keep emotions in balance.</p>

                <h4 style={{ fontWeight: 'bold' }}>Seek Professional Support if Needed:</h4>
                <p>If you ever feel overwhelmed, talking to a therapist or counselor can help you navigate your emotions effectively. Don’t hesitate to seek professional help when required.</p>

                <h4 style={{ fontWeight: 'bold' }}>Focus on Positive Affirmations:</h4>
                <p>Use positive affirmations daily to uplift your spirit and foster emotional strength. Positive thinking can help you remain calm and centered during challenging times.</p>
            </div>

            <center><h2 style={{ fontWeight: 'bold', color: '#333', marginTop: '40px' }}>Emotional Wellbeing Images</h2></center>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                <img src={'/Images/EW.webp'} style={{ height: 'auto', width: '45%', maxWidth: '500px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} alt="Wellbeing" />
                <img src={'/Images/EmotionalWellbeing.webp'} style={{ height: 'auto', width: '45%', maxWidth: '500px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} alt="Reading Novel" />
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link to="/wellbeing">
                    <button style={{ height: '50px', width: '120px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '25px', fontWeight: 'bold' }}>Back</button>
                </Link>
            </div>
        </div>
    );
}
