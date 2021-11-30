import classNames from "classnames";
const generateTestimonial = (users) => {
  return users.map((user, index) => {
    //Make the first item active
    let active = false;
    if (index === 0) {
      active = true;
    }
    let firstItem = classNames({ "carousel-item": true }, { active: active });
    const {
      cell,
      name: { title, first, last },
      picture: { medium },
    } = user;
    return (
      <div key={cell} className={firstItem}>
        <div className="testimonials__card position-relative">
          <p>
            <span>
              <i className="fas fa-quote-left"></i>&nbsp;
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            placeat repudiandae architecto neque mollitia veritatis consequuntur
            sunt cum labore repellendus. Pariatur maxime consequuntur iusto odio
            nobis provident blanditiis harum eos.
            <span>
              &nbsp;
              <i className="fas fa-quote-right"></i>
            </span>
          </p>
          <div className="testimonials__rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <img
            src={medium}
            alt={first}
            title={first}
            className="testimonials__picture img-fluid"
          />
        </div>

        <div className="testimonials__name">
          <h4 className="display-8">{`${title} ${first} ${last}`}</h4>
        </div>
      </div>
    );
  });
};

export default generateTestimonial;
