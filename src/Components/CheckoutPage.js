import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const history = useHistory();
  const [shippingAddress, setShippingAddress] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleShippingInputChange = (event) => {
    const { name, value } = event.target;
    setShippingAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handlePaymentInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    // place the order using the entered address and payment details
    console.log('Placing order...');
    console.log('Shipping Address:', shippingAddress);
    console.log('Payment Details:', paymentDetails);

    // Redirect to a success or confirmation page
    history.push('/confirmation');
  };

  return (
    <div className="checkout-page">
      <h2>Checkout Information</h2>

      {/* Shipping Address */}
      <div className="checkout-section">
        <h4>Shipping Address:</h4>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={shippingAddress.firstName}
            onChange={handleShippingInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={shippingAddress.lastName}
            onChange={handleShippingInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressLine1">Address Line 1:</label>
          <input
            type="text"
            id="addressLine1"
            name="addressLine1"
            value={shippingAddress.addressLine1}
            onChange={handleShippingInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressLine2">Address Line 2:</label>
          <input
            type="text"
            id="addressLine2"
            name="addressLine2"
            value={shippingAddress.addressLine2}
            onChange={handleShippingInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={shippingAddress.city}
            onChange={handleShippingInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={shippingAddress.state}
            onChange={handleShippingInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={shippingAddress.postalCode}
            onChange={handleShippingInputChange}
          />
        </div>
      </div>

      {/* Payment Details */}
      <div className="checkout-section">
        <h4>Payment Details:</h4>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handlePaymentInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardHolderName">Card Holder Name:</label>
          <input
            type="text"
            id="cardHolderName"
            name="cardHolderName"
            value={paymentDetails.cardHolderName}
            onChange={handlePaymentInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={paymentDetails.expiryDate}
            onChange={handlePaymentInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handlePaymentInputChange}
          />
        </div>
      </div>

      {/* Place Order Button */}
      <div className="place-order-button-container">
        <button onClick={handlePlaceOrder}style={{ backgroundColor: 'darkred' }} >Place Order</button>
      </div>
    </div>
  );
};

export default CheckoutPage;