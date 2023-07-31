import React from 'react';

function AboutUs() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Navbar content */}
        </div>
      </nav>

      {/* Image */}
      <div
        className="image-container"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("https://m.media-amazon.com/images/I/9128RGK6oFL.__AC_SX300_SY300_QL70_FMwebp_.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          zIndex: -1,
        }}
      />

      {/* Text Container */}
      <div
        className="container"
        style={{
          position: 'relative',
          marginTop: '20px', //
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          className="text-container bg-light p-4 rounded"
          style={{
            position: 'relative',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            width: '80%', 
            height: '400px', 
            borderRadius: '50%', 
            overflow: 'hidden',
          }}
        >
          <h2 className="text-center"style={{color:'darkred'}}>About Us</h2>
          <p>
            Discover the benefits of switching to non-toxic dental floss and explore alternative options for natural dental care!
          </p>
          <p>
            Maintaining good dental health requires incorporating daily flossing into your routine. However, if you're embarking on a journey towards a healthier lifestyle, you might question the toxicity of traditional dental floss and seek non-toxic alternatives.
          </p>
          <p>
            No need to worry, We are here to assist you! In this store, we will delve into the dental floss brands that do not pose potential risks to your well-being. Additionally, we'll introduce you to safe and non-toxic dental floss choices, making the transition a breeze.
          </p>
          <p>
            Let's begin, shall we?
          </p>
          <p>
            The researchers found that several types of dental floss contained fluorine, which indicates the presence of PFAS compounds. PFHxS is part of a large class of chemicals called PFASs, which are found in many consumer products ranging from nonstick cookware to waterproof clothing to food packaging, and are also used in firefighting foams at airports and military bases. These chemicals have been linked to liver damage, harm to the immune system, developmental issues, and cancer, and can persist in people’s bodies and in the environment for many years. Some types of floss are made with toxic chemicals like Teflon.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;