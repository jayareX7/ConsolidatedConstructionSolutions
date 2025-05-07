import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

import Data from "@content/about/about.json"

const History = () => {
  return (
 <>
      {/* History Start */}
      <section className="gap history detail-page">
        <div className="heading">
          <span>{Data.history.title}</span>
          <h2>{Data.history.subtitle}</h2>
        </div>
        <div className="container spacee">
          <div className="timeline" id="timeline">
            <div className="fill" style={{"height": "20px"}}>
              
            </div>
          </div>
          <div className="row left first">
            <div className="col-lg-5">
              <div className="h-box">
                <figure>
                  <img src={Data.history.slide1.image} alt={Data.history.slide1.alt} />
                </figure>
                <h2>{Data.history.slide1.year}</h2>
                <p>{Data.history.slide1.text}</p>
              </div>
            </div>
          </div>
          <div className="row right">
            <div className="col-lg-5 offset-lg-7">
              <div className="h-box">
                <figure>
                <img src={Data.history.slide2.image} alt={Data.history.slide2.alt} />
                </figure>
                <h2>{Data.history.slide2.year}</h2>
                <p>{Data.history.slide2.text}</p>
              </div>
            </div>
          </div>
          <div className="row left">
            <div className="col-lg-5">
              <div className="h-box">
                <figure>
                <img src={Data.history.slide3.image} alt={Data.history.slide3.alt} />
                </figure>
                <h2>{Data.history.slide3.year}</h2>
                <p>{Data.history.slide3.text}</p></div>
            </div>
          </div>
          <div className="row right">
            <div className="col-lg-5 offset-lg-7">
              <div className="h-box">
                <figure>
                <img src={Data.history.slide4.image} alt={Data.history.slide4.alt} />
                </figure>
                <h2>{Data.history.slide4.year}</h2>
                <p>{Data.history.slide4.text}</p></div>
            </div>
          </div>
          <div className="row left">
            <div className="col-lg-5">
              <div className="h-box">
                <figure>
                <img src={Data.history.slide5.image} alt={Data.history.slide5.alt} />
                </figure>
                <h2>{Data.history.slide5.year}</h2>
                <p>{Data.history.slide5.text}</p></div>
            </div>
          </div>
          <div className="row right">
            <div className="col-lg-5 offset-lg-7">
              <div className="h-box">
                <figure>
                <img src={Data.history.slide6.image} alt={Data.history.slide6.alt} />
                </figure>
                <h2>{Data.history.slide6.year}</h2>
                <p>{Data.history.slide6.text}</p> </div>
            </div>
          </div>
        </div>
      </section>
      {/* History End */}

      </>
  
  );
};
export default History;