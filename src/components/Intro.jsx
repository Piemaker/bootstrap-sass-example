import React, {useState, useEffect} from 'react'
import art from "../assets/pictures/art.svg"
import GLightbox from "glightbox";



export default function Intro() {
    const [lightBox, setLightBox] = useState();
    useEffect(()=>{
        setLightBox(
          GLightbox({
            href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ://www.youtube.com/watch?v=Ga6RYejo6Hk",
            type: "video",
            source: "youtube", //vimeo, youtube or local
            width: 900,
            autoplayVideos: true,
          })
        );
    },[])
    return (
      <section id="home" className="intro-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 intros">
              <h1 className="display-2">
                <span className="display-2--intro">Hello there!</span>
                <span className="display-2--description">
                  This is a react site using bootstrap
                </span>
              </h1>
              <button type="button" className="rounded-pill btn-rounded">
                Get in touch
                <span>
                  <i className="fas fa-mail-bulk"></i>
                </span>
              </button>
            </div>
            <div className="col-md-6 intros">
              <div className="video-box">
                <img className="img-fluid" src={art} alt="Video illustration" />
                <a
                  href="#"
                  className="glightbox position-absolute top-50 start-50 translate-middle"
                >
                  <span>
                    <i className="fas fa-play-circle"></i>
                  </span>
                  <span className="border-animation border-animation--border--1"></span>
                  <span className="border-animation border-animation--border--2"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
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
