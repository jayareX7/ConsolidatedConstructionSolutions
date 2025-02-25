import Data from "@content/homepage/homepage.json";


const About2Section = () => {
    return (
      <section className="gap our-goal">
        <div className="heading">
          <figure>
            <img src="/image/heading-icon.png" alt="heading-icon" />
          </figure>
          <span>{Data.aboutSection2.subtitle}</span>
          <h2>{Data.aboutSection2.title}</h2>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" >
              {Data.aboutSection2.items.map((item, key) => (
              <div key={`about2-item-${key}`} className={key != 0 ? "data p2" : "data" }>
                <h4>{item.title}</h4>
                <div dangerouslySetInnerHTML={{__html : item.text}} />
              </div>
              ))}
            </div>
            <div className="col-lg-6" >
              <div className="data">
                <figure className="goal-img">
                  <img src={Data.aboutSection2.image.url} alt={Data.aboutSection2.image.alt} />
                </figure>
                <figure className="goal-mov">
               
                  <img src={Data.aboutSection2.image_text_rotate.url} alt={Data.aboutSection2.image_text_rotate.alt} />
                </figure>
             
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About2Section;