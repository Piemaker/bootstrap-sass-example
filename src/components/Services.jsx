import React from 'react'
import art1 from "../assets/pictures/art1.svg";
import art2 from "../assets/pictures/art2.svg";
import art3 from "../assets/pictures/art3.svg"
export default function Services() {
    return (
      //START DESCRIPTION
      <section id="services" className="our-services">
        <div className="container">
          <div className="row">
            <h1 className="display-3 fw-bold  text-center">Our Services</h1>
            <div className="heading-line mb-5"></div>
          </div>
        </div>
        <div className="container">
          <div className="row our-services__description">
            <div className="col-md-6 p-4 custom-border">
              <p className="fw-bold text-capitalize text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                et dolore accusantium laboriosam ut iste maxime deleniti ipsa.
                Tempore hic delectus totam dolor. Similique culpa quidem natus.
                Porro, unde ducimus?
              </p>
            </div>
            <div className="col-md-6 p-4 ">
              <p className="text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                nemo ullam at natus tenetur assumenda aliquam culpa
                necessitatibus maiores rem qui ex debitis repudiandae eaque id
                beatae, praesentium eum corrupti.
              </p>
            </div>
          </div>
        </div>
        {/* START SERVICES */}
        <div className="container">
          <div className="row align-items-center our-services__service">
            <div className="col-md-6">
              <i className="fas fa-paper-plane fs-4 text-primary"></i>
              <h2 className="fw-bold mt-2 display-7">Marketing</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
                officiis nobis suscipit laudantium necessitatibus magnam
                mollitia numquam velit minus voluptates fugit. Minima
                perferendis et, nobis sequi maxime voluptatum tempore dicta?
              </p>
              <button className="rounded-pill btn-rounded">
                Learn More
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
            <div className="col-md-6">
              <img
                src={art1}
                alt="illustration 1"
                className="container-fluid"
              />
            </div>
          </div>
          <div className="row text-end align-items-center our-services__service">
            <div className="col-md-6">
              <img
                src={art2}
                alt="illustration 2"
                className="container-fluid"
              />
            </div>
            <div className="col-md-6 ">
              <i className="fas fa-code fs-4 text-primary "></i>
              <h2 className="fw-bold display-7  mt-2">Web Development</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
                officiis nobis suscipit laudantium necessitatibus magnam
                mollitia numquam velit minus voluptates fugit. Minima
                perferendis et, nobis sequi maxime voluptatum tempore dicta?
              </p>
              <button className="rounded-pill btn-rounded">
                Learn More
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="row align-items-center our-services__service">
            <div className="col-md-6">
              <i className="fas fa-cloud fs-4 text-primary"></i>
              <h2 className="fw-bold display-7 mt-2">Cloud Hosting</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
                officiis nobis suscipit laudantium necessitatibus magnam
                mollitia numquam velit minus voluptates fugit. Minima
                perferendis et, nobis sequi maxime voluptatum tempore dicta?
              </p>
              <button className="rounded-pill btn-rounded">
                Learn More
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
            <div className="col-md-6">
              <img
                src={art3}
                alt="illustration 3"
                className="container-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    );
}
