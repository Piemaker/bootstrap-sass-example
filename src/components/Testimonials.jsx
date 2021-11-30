import React,{useState, useEffect} from 'react'
import generateTestimonial from '../generateTestimonial';
export default function Testimonials() {
     const  getUsers = async (numberOfUsers)=>{
         setIsLoading(true);
         try{
        const data = await fetch(`https://randomuser.me/api/?results=${numberOfUsers}`,{dataType: "json"});
        const response = await data.json();
        setUsers(response.results);
        setIsLoading(false);
         }
         catch(err){
             setIsError(true);
         }
        

      
    }
    const [users,setUsers] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(()=>{ 
     getUsers(5);
    },[])
    let content;
    if(isError){
      <h2 className="display-4">Error in loading users reviews</h2>
    }
    else{
      content = 
      <section className="container">
        {isLoading ? (
          <div className="loading"></div>
        ) : (
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="true"
          >
            <div className="carousel-inner">
              {/* CLIENTS */}

              {generateTestimonial(users)}
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-outline-light "
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <i className="fas fa-long-arrow-alt-left"></i>
              </button>
              <button
                className="btn btn-outline-light "
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <i className="fas fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        )}
      </section>;
    }
    
    return (
      <section className="testimonials" id = "testimonials">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,288L48,282.7C96,277,192,267,288,224C384,181,480,107,576,80C672,53,768,75,864,112C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <section className="container">
          {/* HEADING */}
          <section className="row testimonials__heading">
            <h1 className="display-3 text-center fw-bold">Testimonials</h1>
            <div className="heading-line"></div>
            <p className="mt-5 text-capitalize text-center ">
              What our clients are saying
            </p>
          </section>
          {/* CAROUSEL OR ERROR */}
          {content}
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,288L48,282.7C96,277,192,267,288,224C384,181,480,107,576,80C672,53,768,75,864,112C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
    );
}
