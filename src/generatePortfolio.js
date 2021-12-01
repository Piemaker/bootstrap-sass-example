const generatePortfolio = (data)=>{
   return data.map(item =>{
        const {id, url, type} = item;
        console.log(item)
        return (
          <div key={id} className="col-md-5 col-lg-3 shadow m-2 p-0 ">
            <div className="portfolio-box">
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