const generatePortfolio = (data)=>{
   return data.map(item =>{
        const {id, url, type} = item;
        return (
          <div key={id} className="col-md-6 col-lg-4 p-2 ">
            <div className="portfolio-box shadow">
              <img
                src={url}
                alt={type}
                title={type}
                className="img-fluid"
              ></img>
              <div className="portfolio-info">
                <div className="portfolio-info__caption">
                  <h4>title here {id} </h4>
                  <p>caption goes here {id}</p>
                </div>
              </div>
            </div>
          </div>
        );
    })
}
export default generatePortfolio;