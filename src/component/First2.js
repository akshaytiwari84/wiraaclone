import React from 'react';
import it from './images/it.png';
import lifesty from './images/lifesty.png';
import study from './images/study.png';
import Writing from './images/writing.png';
function First2() {
  return (
    <div>
      <div className="card_container container">
        <div className="pt-5 row">
          <div className="col-sm-3 col-6">
            <div className="card-box" style={{ textAlign: 'center' }}>
              <img src={it} alt="" className="card-img" style={{ height: '60px', width: '60px' }} />
              <h3></h3>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-5 row">
          <div className="col-md-3 col-sm-3 col-6">
            <div className="card-box">
              <img src={lifesty} alt="" className="card-img" style={{ height: '60px', width: '60px' }} />
              <h3>market</h3>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-6">
            <div className="card-box">
              <img src={study} alt="" className="card-img" style={{ height: '60px', width: '60px' }} />
              <h3>Study</h3>
            </div>
          </div>
          <div className="col-sm-3 col-6">
            <div className="card-box">
              <img src={Writing} alt="" className="card-img" style={{ height: '60px', width: '60px' }} />
              <h3>Writing</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default First2;
