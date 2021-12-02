import React from 'react'

export default function GetStarted() {
    return (
      <section id="getStarted" className="get-started">
        <div className="container ">
          <div className="row text-center">
            <h3 className="fw-bold display-3">Get Started</h3>
            <div className="heading-line"></div>
            <p className="lead mt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              cumque fugiat voluptas!
            </p>
          </div>
          <div className="row get-started__content text-white">
            <div className="col-md-6 gradient-bg shadow p-5">
              <h3 className="display-6 fw-bold text-wrap text-capitalize">
                Satisfaction Guaranteed
              </h3>
              <p className="lead lh-2 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                ad commodi, animi velit aut harum incidunt nesciunt, maiores
                autem sit reiciendis error dolor quidem voluptatem nam eum.
                Provident, qui libero!
              </p>
              <h3 className="display-8 fw-bold text-capitalize">
                What will be the next step?
              </h3>
              <ul className="list">
                <li>
                  <i className="fas fa-check"></i>Lorem, ipsum dolor.
                </li>
                <li>
                  <i className="fas fa-check"></i>Lorem, ipsum dolor.
                </li>
                <li>
                  <i className="fas fa-check"></i>Lorem, ipsum dolor.
                </li>
              </ul>
            </div>
            <div className="col-md-6 shadow p-5">
              <h3 className="fw-bold display-7">Reach Us!</h3>
              <form action="#">
                <div class="mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        placeholder="first name"
                        type="text"
                        className="form-control shadow-sm mb-2"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        placeholder="last name"
                        type="text"
                        className="form-control shadow-sm mb-2"
                      />
                    </div>
                  </div>
                  <input
                    type="email"
                    className="form-control shadow-sm mb-2"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  ></input>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control shadow-sm mb-2"
                    id="exampleFormControlTextarea1"
                    rows="7"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div class="d-grid gap-2 col-12 mx-auto">
                  <button class="btn btn-submit" type="submit">
                    <span>
                      <i className="fas fa-paper-plane"></i>Deliver!
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}
