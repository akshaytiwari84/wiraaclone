import React from 'react';
import First from './images/First.png';
import Second from './images/Second.png';
import tt from './images/tt.png'


function Third() {
  return (
    <div>
      <div className="container-fluid">
        <div className="pt-5 pb-5 row">
          <div className="col">
            <h1 className="text-center hiresmarternotharder" style={{ fontSize: '40px', color: 'black' }}>Hire smarter, not harder</h1>
            <p className="text-center" style={{ fontSize: '22px', color: 'grey' }}>
              Find, connect, and hire the best talents to work on projects without any cost
            </p>
          </div>
        </div>

        <div className="pt-5 pb-5 hiresmart row">
          <div className="col-sm-4">
            {/* Image 1 */}
            <img
              src={First}
              alt="Image1"
              className="img-fluid"
            />
            <p className="text-center mt-2" style={{ color: 'grey' }}>
              A free platform for businesses to find the perfect talent for their projects
            </p>
          </div>
          <div className="col-sm-4">
            {/* Image 2 */}
            <img
              src={Second}
              alt="Image2"
              className="img-fluid"
            />
            <p className="text-center mt-2" style={{ color: 'grey' }}>
              Another description goes here
            </p>
          </div>
          <div className="col-sm-4">
            {/* Image 3 */}
            <img
              src={tt}
              alt="Image3"
              className="img-fluid"
            />
            <p className="text-center mt-2" style={{ color: 'grey' }}>
              Description for the third image
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Third;
