import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const JoinHundreds = () => {
  return (
    <section className="text-center bg-primary mt-4">
      {/* Desktop image (hidden on xs to md screens) */}
      <img
        src={require("../../../Resources/Background/newBack3.png")}
        alt="Desktop View"
        className="img-fluid d-none d-md-block"
      />
      {/* Mobile image (visible on xs to md screens, hidden on larger screens) */}
      <img
        src={require("../../../Resources/Background/newBack2.png")}
        alt="Mobile View"
        className="img-fluid d-block d-md-none"
      />

      {/* Common Content for desktop and mobile */}
      <div className="mt-3 py-4">
        <p>Connect with hundreds of Indians, Pakistani, Bangladeshi, Nepali, Gyanese, and more singles.</p>
        <Link to="/register">
          <Button
            variant="dark"
            className="text-primary"
            style={{
              height: "50px",
              width: "163px",
              borderRadius: "15px",
              fontSize: "20px",
              boxShadow: "2px 2px 2px rgb(0,0,0)"
            }}
          >
            Join for Free
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default JoinHundreds;
