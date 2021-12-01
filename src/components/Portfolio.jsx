import React,{useState} from 'react'
import generatePortfolio from '../generatePortfolio';
import data from "../assets/fake-portfolio/data";
export default function Portfolio() {
const [portfolio,setPortfolio] = useState(data);
const handleClick = (e)=>{
    const filterType = e.target.value;
    if(filterType === "all"){
        setPortfolio(data);
    }
    else{
    const filteredData = data.filter(item => item.type === filterType);
     setPortfolio(filteredData);   }
}
    return (
      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="row text-center">
            <h1 className="display-3 text-capitalize fw-bold">Portfolio</h1>
            <div className="heading-line"></div>
            <p className="lead mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              rerum voluptas sit!
            </p>
          </div>
          <div className="row text-center mt-3">
            <div className="col-12">
              <button className="btn btn-outline-primary me-1" type="button" value = "all" onClick = {handleClick}>
                All
              </button>
              <button className="btn btn-outline-primary me-1" type="button" value = "website" onClick = {handleClick}>
                Websites
              </button>
              <button className="btn btn-outline-primary me-1" type="button" value = "design" onClick = {handleClick}>
                Design
              </button>
              <button className="btn btn-outline-primary me-1" type="button" value = "mockup" onClick = {handleClick}>
                Mockup
              </button>
            </div>
          </div>
        </div>
        {/* PORTFOLIO PROJECTS SECTION */}
        <div className="container mt-3">
          <div className="row justify-content-center">{generatePortfolio(portfolio)}</div>
        </div>
      </section>
    );
}
