import React from 'react';

const ContactUs = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
  };

  const ovalImageStyle = {
    width: '500px',
    height: 'auto',
    borderRadius: '50%',
    marginTop: '20px',
  };

  const roundImageStyle = {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    position: 'absolute',
    top: '20px',
    right: '20px',
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1>Contact Us:</h1><br></br>
        <p style={{ color: 'darkblue' }}>
          Phone Number:<br></br>
          123-456-7890
        </p>
        <p style={{ color: 'darkblue' }}>
          Email Address:<br></br>
          example@.flossfun.com
        </p>
        <p style={{ color: 'darkblue' }}>
          Fax Number:<br></br>
          987-654-3210
        </p>
      </div>
      <img
        src="https://buythebest10.com/wp-content/uploads/2015/09/Best-Dental-Flosses.png"
        alt="Dental Flosses"
        style={ovalImageStyle}
      />
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.TyDMhDlS9KaqOi5SS-VGOwHaFg&pid=Api&P=0&h=180"
        alt="Contact Image"
        style={roundImageStyle}
      />
    </div>
  );
};

export default ContactUs;