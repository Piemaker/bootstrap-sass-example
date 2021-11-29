import React from 'react'
import companiesLogos from '../assets/pictures/Companies/companies-logos'

export default function Companies() {
    const logos =  companiesLogos.map(logoObj =>{
       for (const [key,value] of Object.entries(logoObj)){
        return (
            <div key = {key} className=" col-md-3 col-lg mb-md-3 mx-md-1 companies__logo-box shadow-sm"><img src = {value} alt= {key} title = {key} className="img-fluid" /></div>

        )}
    })
    return (
      <section id="companies" className="companies">
        <div className="container">
          <div className="row">
            <h4 className="fw-bold lead my-5 text-center heading-line">
              Trusted by companies like
            </h4>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-around">{logos}</div>
        </div>
      </section>
    );
}
