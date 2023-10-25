import React from 'react';
import './Footer.css'; // Import your CSS file
import insta from './images/insta.png';
import fb from './images/fb.png';
import socials from './images/socials.png';

const Footer = () => {
  return (
    <footer className="footer-20192">
      <div className="site-section">
        <div className="container">
          <div className="cta d-block d-md-flex align-items-center px-5">
           
              <h2 className="mb-0">Ready for a next project?</h2>
              <p>Wiraa - connect with experts</p>
           
            
              <a href="#" className="btn btn-dark rounded-0 py-3 px-5">Contact us</a>
            
          </div>
          <div className="row">
            <div className="col-sm">
              <a href="#" className="footer-logo">Wiraa</a>
              <p className="copyright">
                <small>&copy; connect with experts</small>
              </p>
            </div>
            
              <h3>Customers</h3>
              <ul className="list-unstyled links">
                <li><a href="#">Buyer</a></li>
                <li><a href="#">Supplier</a></li>
              </ul>
            
            
              <h3>Company</h3>
              <ul className="list-unstyled links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
           
            <div className="col-sm">
              <h3>Further Information</h3>
              <ul className="list-unstyled links">
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            
              <h3>Follow us</h3>
              <div className="social-icons">
                <img
                  src={socials}
                  alt="Download Logo"
                  style={{
                    width: '130px', // Adjust the width as needed
                    height: 'auto', // This maintains the image's aspect ratio
                  }}
                />
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
