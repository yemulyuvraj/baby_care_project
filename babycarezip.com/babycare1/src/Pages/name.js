import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

// Product Data
const OurProduct = [
  { name: 'Baby Soap', image: '/images/babysoap.jpg', price: '1 Soap = 40 rs' },
  { name: 'Baby Tissues', image: '/images/babyTissues.jpg', price: '50 pieces = 100 rs' },
  { name: 'Baby Shampoo', image: '/images/babyShampoo.jpg', price: '70 ml = 120 rs' },
  { name: 'Baby Oil', image: '/images/babyOil.jpg', price: '100 ml = 150 rs' },
  { name: 'Baby Moisturiser', image: '/images/moisturiser.jpg', price: '50 ml = 90 rs' },
  { name: 'Baby Lotion', image: '/images/lotion.jpg', price: '50 ml = 120 rs' },
  { name: 'Baby Nail Clipper', image: '/images/nailClipper.jpg', price: '1 set = 150 rs' },
  { name: 'Baby Nasal Aspirator', image: '/images/nasalAspirator.jpg', price: '1 Pump = 140 rs' },
  { name: 'Baby All Skin Soap', image: '/images/allSkinSoap.webp', price: '1 Packet = 200 rs' },
  { name: 'Baby Wet Wipes', image: '/images/babyWetWipes.jpg', price: '50 pieces = 150 rs' },
  { name: 'Baby Comb And Brush Set', image: '/images/combAndBrush.jpg', price: '1 set = 99 rs' },
  { name: 'Baby SunScreen', image: '/images/sunscreen.jpg', price: '50 mg = 120 rs' },
];

const Product = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    address: '',
    product: '',
    quantity: '',
  });

  const quantityOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const selectedProduct = OurProduct.find((product) => product.name === formData.product);
      const price = parseFloat(selectedProduct.price.split('=')[1]);
      const totalPrice = price * formData.quantity;
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 3);

      const order = {
        ...formData,
        quantity: parseInt(formData.quantity),
        totalPrice,
        deliveryDate: deliveryDate.toISOString(),
      };

      const response = await axios.post('http://localhost:8080/api/orders', order);
      alert('Order submitted successfully!');
      navigate('/order-summary', { state: response.data });
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Failed to submit order. Please try again.');
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>BabyCare Products</h1>

      {/* Product Cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', marginTop: '20px' }}>
        {OurProduct.map((product, index) => (
          <div
            key={index}
            style={{
              textAlign: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '10px',
              padding: '10px',
              width: 'calc(25% - 30px)',
              boxSizing: 'border-box',
            }}
          >
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '10px' }} />
            <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{product.name}</p>
            <p style={{ color: '#666', marginTop: '5px' }}>{product.price}</p>
          </div>
        ))}
      </div>

      {/* Order Form */}
      <div
        style={{
          maxWidth: '600px',
          margin: '20px auto',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '10px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Order Form</h2>

          {/* Form Fields */}
          {['Full Name', 'Email', 'Contact Number', 'Address'].map((field, index) => (
            <div style={{ marginBottom: '15px' }} key={index}>
              <label
                htmlFor={field.toLowerCase().replace(' ', '')}
                style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
              >
                {field}
              </label>
              <input
                type={field === 'Email' ? 'email' : field === 'Contact Number' ? 'tel' : 'text'}
                id={field.toLowerCase().replace(' ', '')}
                name={field.toLowerCase().replace(' ', '')}
                value={formData[field.toLowerCase().replace(' ', '')]}
                onChange={handleChange}
                placeholder={`Enter your ${field.toLowerCase()}`}
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              />
            </div>
          ))}

          {/* Dropdowns */}
          {['Product', 'Quantity'].map((field, index) => (
            <div style={{ marginBottom: '15px' }} key={index}>
              <label
                htmlFor={field.toLowerCase()}
                style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
              >
                {field}
              </label>
              <select
                id={field.toLowerCase()}
                name={field.toLowerCase()}
                value={formData[field.toLowerCase()]}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              >
                <option value="" disabled>{`Select ${field.toLowerCase()}`}</option>
                {field === 'Product'
                  ? OurProduct.map((product) => (
                      <option key={product.name} value={product.name}>
                        {product.name}
                      </option>
                    ))
                  : quantityOptions.map((qty) => (
                      <option key={qty} value={qty}>
                        {qty}
                      </option>
                    ))}
              </select>
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>

        {/* Back Button */}
        <div className="text-center mt-4">
        <Link to="/mother">
          <Button style={{ backgroundColor: '#6c757d', border: 'none', borderRadius: '20px', padding: '0.5rem 1.5rem' }}>Back</Button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Product;
