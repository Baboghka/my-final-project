import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 
import ContactUs from './ContactUs'; 

function HomePage() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h2 className="text-center" style={{color:'darkred'}}>Welcome to Our Page</h2>
      <img
        src="https://ae01.alicdn.com/kf/HTB1ZM7ccoEIL1JjSZFFq6A5kVXaL/Dental-Floss-Stick-Toothpick-Dental-50m-Interdental-Brush-Teeth-Clean-Flosser-Teeth-Flosser-Tooth-Clean-Polyester.jpg"
        alt="Dental Floss"
        style={{ width: '700px', height: '700px', borderRadius: '50%' }}
      />
      <Link to="/contact" className="btn btn-primary">Contact Us</Link>
    </div>
  );
}
export default HomePage;