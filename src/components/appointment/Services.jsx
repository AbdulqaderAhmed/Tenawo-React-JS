import React from "react";

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="department-sub alt-font text-center">
              <p>Some services that we will provide now and in the future.</p>
            </div>
            <div className="department-title main-font text-center">
              <h2>
                Mobile App<span className="title-clr"> Access</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="feature-item mb-md-0 mb-5">
              <span className="icon">
                <i aria-hidden="true" className="fas fa-stethoscope"></i>
              </span>

              <div className="text feature-txt">
                <h4 className="feature-heading">Examination of Body</h4>
                <p>
                  Phasellus eu scelerisque ligula. Pellentesque sollicitudin
                  quis orci laoreet vehicula.
                </p>
              </div>
            </div>
            <div className="feature-item mb-md-0 mb-5">
              <span className="icon-2">
                <i aria-hidden="true" className="fas fa-tint"></i>
              </span>

              <div className="text feature-txt">
                <h4 className="feature-heading">Blood Test</h4>
                <p>
                  Duis imperdiet convallis lorem. Sed efficitur lacus eget purus
                  mattis, ac mollis justo porttitor.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-item mb-md-0 mb-5">
              <span className="icon-2">
                <i aria-hidden="true" className="fas fa-briefcase-medical"></i>
              </span>
              <div className="text feature-txt">
                <h4 className="feature-heading">Surgery</h4>
                <p>
                  Phasellus eu scelerisque ligula. Pellentesque sollicitudin
                  quis orci laoreet vehicula.
                </p>
              </div>
            </div>
            <div className="feature-item mb-md-0 mb-5">
              <span className="icon">
                <i aria-hidden="true" className="fas fa-microscope"></i>
              </span>
              <div className="text feature-txt">
                <h4 className="feature-heading">Dermatology</h4>
                <p>
                  Duis imperdiet convallis lorem. Sed efficitur lacus eget purus
                  mattis, ac mollis justo porttitor.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-item mb-md-0 mb-5">
              <span className="icon">
                <i aria-hidden="true" className="fas fa-syringe"></i>
              </span>

              <div className="text feature-txt">
                <h4 className="feature-heading">Internal Medicine</h4>
                <p>
                  Proin feugiat ex pharetra neque vestibulum consectetur. Donec
                  non turpis et leo luctus.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <span className="icon-2">
                <i aria-hidden="true" className="fas fa-heart"></i>
              </span>

              <div className="text feature-txt">
                <h4 className="feature-heading">Cardio</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit. Curabitur at
                  blandit duiut consequat ex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
