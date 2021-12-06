import React from 'react'

export default function Footer() {
    return (
      <footer id="footer" className="footer">
        <section className="footer-contact container">
          <div className="row m-auto">
            <div className="col-md-4 p-2">
              <div className="contact-item">
                <div className="row align-items-center">
                  <div className="col-2 d-flex justify-content-center">
                    <i className=" fas fa-mobile-alt text-primary"></i>
                  </div>
                  <div className="col-10">
                    <div className="d-flex flex-column">
                      <h3>+02 123456789</h3>
                      <p className="lead">from 9 am:6 pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div className="contact-item">
                <div className="row align-items-center">
                  <div className="col-2 d-flex justify-content-center">
                    <i className="far fa-envelope text-primary"></i>
                  </div>
                  <div className="col-10">
                    <div className="d-flex flex-column">
                      <h3>ourcompany@ourdomain.com</h3>
                      <p className="lead">online support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div className="contact-item">
                <div className="row align-items-center">
                  <div className="col-2 d-flex justify-content-center">
                    <i className="far fa-map text-primary"></i>
                  </div>
                  <div className="col-10">
                    <div className="d-flex flex-column">
                      <h3>cairo, egypt</h3>
                      <p className="lead">heliopolis, cairo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer-social p-2">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-6 col-md-5 text-white p-2">
                <span className="text-capitalize align-middle">
                  connect with us
                </span>
              </div>
              <div className="col-lg-6 col-md-7 p-2 social-icons">
                <a href="https://twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="footer-contact">
          <div className="container">
            <div className="row text-white">
              <div className="col-lg-6 col-sm-6">
                <h2 className="footer-font">Company Name</h2>
                <div className="single-line"></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur voluptatum dolorum recusandae.
                </p>
              </div>
              <div className="col-lg-2 col-sm-6">
                <h2 className="footer-font">Products</h2>
                <div className="single-line"></div>
                <ul className="footer-list">
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
              </div>
              <div className="col-lg-2 col-sm-6">
                <h2 className="footer-font">Useful Links</h2>
                <div className="single-line"></div>
                <ul className="footer-list">
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
              </div>
              <div className="col-lg-2 col-sm-6">
                <h2 className="footer-font">Contact</h2>
                <div className="single-line"></div>
                <ul className="footer-list">
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="footer-bottom p-2">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="footer-bottom__copyright">
                  &copy; Copyright 2021 <a href="#">Company name</a> | Created
                  by <a href="https://github.com/Piemaker">Piemaker</a>{" "}
                  <i className="far fa-user-circle"></i>
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    );
}
