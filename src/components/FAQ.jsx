import React from 'react'

export default function FAQ() {
    return (
      <section className="container" id="faq">
        <h1 className="display-3 fw-bold  text-center">FAQ?</h1>
        <div className="heading-line mb-5"></div>
        <p className="text-center fw-light">Here are what we are asked most</p>
        <div className="accordion mb-5" id="accordionExample">
          <div className=" shadow mb-2 ">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Prices
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quo
                eveniet minus architecto ex numquam, iusto amet repellat quis
                maxime labore. Nobis ullam natus omnis sed error laboriosam,
                laborum quas.
              </div>
            </div>
          </div>
          <div className="accordion-item shadow mb-2 ">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Availability
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi neque expedita ullam unde minima assumenda asperiores
                possimus, quia corrupti sapiente laudantium eaque illum
                praesentium. Asperiores doloremque excepturi maiores facilis
                similique.
              </div>
            </div>
          </div>
          <div className="accordion-item shadow mb-2 ">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Different Plans
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                consequatur quae, expedita recusandae cumque maiores dolore!
                Repellat aliquid hic rem tenetur iste, asperiores sapiente dolor
                cum necessitatibus rerum facere. Quidem!
              </div>
            </div>
          </div>
          <div className="accordion-item shadow mb-2 ">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Refunds
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                consequatur quae, expedita recusandae cumque maiores dolore!
                Repellat aliquid hic rem tenetur iste, asperiores sapiente dolor
                cum necessitatibus rerum facere. Quidem!
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
