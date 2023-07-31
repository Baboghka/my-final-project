import React from 'react';

export function AddToCardButton({ onClick, isActive }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`add-to-card-button ${isActive ? 'green' : ''}`}
    >
      Add to Card
    </button>
  );
}

export function CheckoutButton({ onClick, isActive }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`checkout-button ${isActive ? 'skyblue' : ''}`}
    >
      Checkout
    </button>
  );
}