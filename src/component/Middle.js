import React from 'react';
import middle from './images/middle.png';
import './middle.css'; // Import your CSS file

function Middle() {
  return (
    <section className="middle-section">
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <div className="card middle-card">
              <div className="row m-5">
                <div className="col-sm-5 text-center" style={{ marginTop: '40px' }}>
                  <h3 className="middle-heading">Unlock the secrets to successful freelancing</h3>
                  <p className="middle-description">Become a successful freelancer and learn tips and tricks from the experts to thrive in any industry.</p>
                  <button className="home-learn">Start Learning</button>
                </div>
                <div className="col-sm-7">
                  <img className="middle-image" src={middle} alt="Freelancer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Middle;
