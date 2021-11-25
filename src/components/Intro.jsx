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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,32L21.8,69.3C43.6,107,87,181,131,202.7C174.5,224,218,192,262,181.3C305.5,171,349,181,393,165.3C436.4,149,480,107,524,117.3C567.3,128,611,192,655,213.3C698.2,235,742,213,785,176C829.1,139,873,85,916,74.7C960,64,1004,96,1047,128C1090.9,160,1135,192,1178,224C1221.8,256,1265,288,1309,250.7C1352.7,213,1396,107,1418,53.3L1440,0L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg>
      </section>
    );
}
