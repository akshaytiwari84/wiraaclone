import React from 'react';
import logo from './images/logoplay.png';
import phone from './images/phone.png';

function First3() {
  return (
    <div>
      <div className="pt-4 row">
        <div className="col-sm-5" style={{ marginTop: '30px' }}>
          <span className="header" style={{ fontSize: '24px' }}>Hire top talents from <span className="anywhere" style={{ color: 'rgb(0, 128, 128)' }}>anywhere</span></span>
          <p className="subheader" style={{ backgroundColor: 'buttonhighlight', fontSize: '18px' }}>
            We’re available on Android devices and platforms.
          </p>
        </div>
        <div className="col-sm-3">
          <img src={logo} alt="" className="Picture10" style={{ width: '82%', marginTop: '30px', marginLeft: '10px' }} />
        </div>
        <div className="col-sm-4">
          <img src={phone} alt="" className="Picture09" style={{ width: '80%', height: '100%', float: 'right' }} />
        </div>
      </div>
    </div>
  );
}

export default First3;
