import React from 'react';
import { Link } from 'react-router-dom';

export default function Mental() {
    return (
        <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', color: '#333', lineHeight: '1.6' }}>
            <h1 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#333' }}>Mental Wellbeing</h1>
            <h3 style={{ fontSize: '1.2em', color: '#555', marginBottom: '20px' }}>
                <b>Introduction:</b> Motherhood is a beautiful journey filled with love, joy, and challenges. However, the emotional and mental demands can be overwhelming at times. It's crucial to prioritize your mental wellbeing to navigate this transformative phase effectively.
            </h3>

            <div style={{ color: '#666' }}>
                <h4 style={{ fontWeight: 'bold' }}>Recognize the Importance of Mental Health:</h4>
                <p>Understand that mental health is just as important as physical health. It's okay to acknowledge feelings of stress, anxiety, or sadness.</p>

                <h4 style={{ fontWeight: 'bold' }}>Practice Mindfulness and Relaxation Techniques:</h4>
                <p>Incorporate mindfulness practices such as meditation, deep breathing, or yoga into your daily routine to help manage stress and enhance emotional resilience.</p>

                <h4 style={{ fontWeight: 'bold' }}>Seek Professional Support:</h4>
                <p>Don’t hesitate to reach out to a mental health professional or counselor if you're feeling overwhelmed. Talking about your feelings can provide relief and perspective.</p>

                <h4 style={{ fontWeight: 'bold' }}>Build a Support System:</h4>
                <p>Surround yourself with supportive friends and family who understand the challenges of motherhood. Sharing experiences and feelings can be incredibly healing.</p>

                <h4 style={{ fontWeight: 'bold' }}>Establish a Routine:</h4>
                <p>Create a daily routine that includes time for self-care, hobbies, and relaxation. A structured day can bring a sense of control and reduce anxiety.</p>

                <h4 style={{ fontWeight: 'bold' }}>Limit Social Media Exposure:</h4>
                <p>Be mindful of how social media affects your mental health. Consider reducing your time on social platforms that may contribute to feelings of inadequacy or comparison.</p>

                <h4 style={{ fontWeight: 'bold' }}>Prioritize Self-Care:</h4>
                <p>Make time for activities that bring you joy and relaxation, whether it’s reading, taking a walk, or enjoying a hobby. Self-care is essential for mental wellbeing.</p>

                <h4 style={{ fontWeight: 'bold' }}>Stay Informed:</h4>
                <p>Educate yourself about mental health issues and resources available for mothers. Knowledge can empower you to take proactive steps for your mental wellbeing.</p>
            </div>

            <center><h2 style={{ fontWeight: 'bold', color: '#333', marginTop: '40px' }}>Mental Wellbeing Images</h2></center>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                <img src={'/Images/women1.jpg'} style={{ height: 'auto', width: '45%', maxWidth: '400px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} alt="Wellbeing" />
                <img src={'/Images/readNovel.webp'} style={{ height: 'auto', width: '45%', maxWidth: '400px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} alt="Reading Novel" />
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link to="/wellbeing">
                    <button style={{ height: '50px', width: '120px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '25px', fontWeight: 'bold' }}>Back</button>
                </Link>
            </div>
        </div>
    );
}
