import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import wiraa from './images/wiraa.jpg';
class Header extends React.Component {
  render() {
    const imageStyle = {
        width: '200px', // Adjust the width as needed
        height: 'auto',  // This maintains the image's aspect ratio
      };
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            
          <img src={wiraa} alt="Wiraa Logo" style={imageStyle} />
          </div>
         
          <ul className="nav navbar-nav navbar-right">
          <li><a href="#"><span className="glyphicon"></span> Learn</a></li>
          <li><a href="#"><span className="glyphicon"></span> Startup</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>

          </ul>
          <div>
          
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
