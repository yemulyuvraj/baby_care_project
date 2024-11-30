import { useLocation, useNavigate } from 'react-router-dom';
import './OrderSummary.css';

const OrderSummary = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const order = state;

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div>
      {/* Background */}
      <div className="order-summary-background"></div>

      {/* Order Summary Content */}
      <div className="order-summary-container">
        
      <h1 className="order-summary-header">   Order Summary
        </h1>
        
        <p className="order-summary-item"><strong>Email:</strong> {order.email}</p>
        
        <p className="order-summary-item"><strong>Product:</strong> {order.product}</p>
        <p className="order-summary-item"><strong>Quantity:</strong> {order.quantity}</p>
        <p className="order-summary-item"><strong>Total Price:</strong> {order.totalPrice} Rs</p>
        
        <p className="order-summary-item"><strong>Delivery Date:</strong> {new Date(order.deliveryDate).toDateString()}</p> <br/><br/>
        
          <button
            onClick={handleBack}
            className="back-button"
          >
            Back
          </button>
      </div>
      
       
    </div>
  );
};

export default OrderSummary;
