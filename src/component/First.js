import React from 'react';
import s1 from './images/s1.png';
import s2 from './images/s2.png';
import s4 from './images/s4.png';

import './First.css'; // Import your CSS file

const First = () => {
  return (
    <div className="top-professionals">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6">
            <img src={s4} alt="Image 1" className="left-image" />
          </div>
          <div className="col-md-6">
            <img src={s1} alt="Image 5" className="right-image" />
          </div>
        </div>
        <div>
          <p className="top-text-h1">Discover the world's top professionals</p>
          <p>Hire world’s top freelancers and get work done in a safe and flexible environment.</p>
        </div>
        <div className="row">
        <div className="col-md-6">
          <img src={s1} alt="Image 1" className="left-image" />
        </div>
        <div className="col-md-6">
          <img src={s2} alt="Image 5" className="right-image" />
        </div>
      </div>
        
       
        
      </div>
      <br/>
      <div>
      <button className="btn grey-button">Post a Project</button>
      <button className="btn black-button" style={{ marginLeft: '20px' }}>Find a Project</button>
      
    </div>
    <br/>
    </div>
  );
};

export default First;
