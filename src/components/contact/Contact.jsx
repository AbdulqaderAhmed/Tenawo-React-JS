import React from "react";

export default function Contact() {
  return (
    <section id="contactus" className="contact p-0 position-relative">
      <div className="bg-overlay bg-color"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div id="google-map" className="bg-light-gray map"></div>
          </div>

          <div className="col-md-6">
            <div className="address-box tittle mb-0 bg-img4 ml-0 ml-md-5">
              {/* overlay */}
              <div className="bg-overlay opacity-8"></div>
              <div className="address-text alt-font text-md-left text-white position-relative wow fadeInUp">
                <h5 className="mb-3 text-capitalize contact-subtitle font-weight-light">
                  Lorem ipsum dolor sit amet consectetur
                </h5>

                {/* title */}
                <h2 className="mb-4 main-font map-text text-capitalize">
                  MegaOne Medical
                </h2>

                {/* Address */}
                <p className="mb-3">
                  123 Stree New York City , United States Of America.
                </p>

                {/* Phone */}
                <p className="mb-3">
                  Office Telephone : 001 01085379709
                  <br />
                  Mobile : 001 63165370895
                </p>

                {/* Email */}
                <p className="mb-3">
                  mail : admin@website.com
                  <br />
                  Inquiries : email@website.com
                </p>

                {/* Timing */}
                <p className="mb-3">Mon-Fri: 9am to 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
