import React from "react";

const Contact = () => {
  return (
    <section className="p-5 bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item bg-light">
                <span className="fw-bold">Email: </span>
                support@mirchimeals.com
              </li>
            </ul>
          </div>
          <div className="col-md">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
