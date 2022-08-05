import React from "react";
import photo from "../../assets/img/header.jpg";

export default function Testimonial() {
  return (
    <section id="testimonial" className="bg-testimonial my-5">
      <div className="container">
        <div className="row">
          <div className="test">
            <div className="testimonial-title">
              <h2>Happy Patient</h2>
            </div>
            <div className="testimonial-subtitle">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in velit dolor. Vivamus gravida, neque nec interdum cursus, erat
                ligula.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div id="testimonial_slider" className="owl-carousel">
            {/* testimonial item */}
            <div className="testimonial-item item">
              <i className="fa fa-quote-left testimonial-icon gradient-text1"></i>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in velit dolor. Vivamus gravida, neque nec interdum cursus, erat
                ligula porta nibh.
              </p>

              {/* Image */}
              <div className="testimonial-image">
                <img src={photo} alt="image" />
              </div>
              <h5 className="font-weight-500 main-font drk-blu">David Gover</h5>
              <span className="destination main-font">Newyork, USA</span>
            </div>

            {/* testimonial item */}
            <div className="testimonial-item item">
              <i className="fa fa-quote-left testimonial-icon gradient-text1"></i>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in velit dolor. Vivamus gravida, neque nec interdum cursus, erat
                ligula porta nibh.
              </p>

              {/* Image */}
              <div className="testimonial-image">
                <img src={photo} alt="image" />
              </div>
              <h5 className="font-weight-500 main-font drk-blu">
                Jessica Briany
              </h5>
              <span className="destination main-font">Florida, USA</span>
            </div>

            {/* testimonial item */}
            <div className="testimonial-item item">
              <i className="fa fa-quote-left testimonial-icon gradient-text1"></i>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in velit dolor. Vivamus gravida, neque nec interdum cursus, erat
                ligula porta nibh.
              </p>

              {/* Image */}
              <div className="testimonial-image">
                <img src={photo} alt="image" />
              </div>
              <h5 className="font-weight-500 main-font drk-blu">
                Albert Joseph
              </h5>
              <span className="destination main-font">London, USA</span>
            </div>

            {/* testimonial item */}
            <div className="testimonial-item item">
              <i className="fa fa-quote-right testimonial-icon gradient-text1"></i>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in velit dolor. Vivamus gravida, neque nec interdum cursus, erat
                ligula porta nibh.
              </p>

              {/* Image */}
              <div className="testimonial-image">
                <img src={photo} alt="image" />
              </div>
              <h5 className="font-weight-500 main-font drk-blu">David Gover</h5>
              <span className="destination main-font">Newyork, USA</span>
            </div>

            {/* testimonial item */}
            <div className="testimonial-item item">
              <i className="fa fa-quote-right testimonial-icon gradient-text1"></i>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in velit dolor. Vivamus gravida, neque nec interdum cursus, erat
                ligula porta nibh.
              </p>

              {/* Image */}
              <div className="testimonial-image">
                <img src={photo} alt="image" />
              </div>
              <h5 className="font-weight-500 main-font drk-blu">David Gover</h5>
              <span className="destination main-font">Newyork, USA</span>
            </div>

            {/* testimonial item */}
            <div className="testimonial-item item">
              <i className="fa fa-quote-right testimonial-icon gradient-text1"></i>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in velit dolor. Vivamus gravida, neque nec interdum cursus, erat
                ligula porta nibh.
              </p>

              {/* Image */}
              <div className="testimonial-image">
                <img src={photo} alt="image" />
              </div>
              <h5 className="font-weight-500 main-font drk-blu">David Gover</h5>
              <span className="destination main-font">Newyork, USA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
