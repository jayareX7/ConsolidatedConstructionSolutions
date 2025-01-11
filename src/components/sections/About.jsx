import Data from "@content/homepage/homepage.json";

const AboutSection = () => {
    return (
      <section className="gap no-top about-style-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" >
              <div className="about-data-left">
                <figure>
                  <img src={Data.aboutSection1.image1.url} alt={Data.aboutSection1.image1.alt} />
                </figure>
                <figure className="about-image">
                  <img src={Data.aboutSection1.image2.url} alt={Data.aboutSection1.image2.alt} />
                </figure>
              </div>
            </div>
            <div className="col-lg-6" >
              <div className="about-data-right">
                <span>{Data.aboutSection1.subtitle}</span>
                <h2>{Data.aboutSection1.title}</h2>
                <div className="about-info">
                  <p>
                    {Data.aboutSection1.text}
                  </p>
                  <figure>
                    <img className="light-icon" src={Data.aboutSection1.signature.light} alt={Data.aboutSection1.signature.alt} />
                    <img className="dark-icon" src={Data.aboutSection1.signature.dark} alt={Data.aboutSection1.signature.alt} />
                  </figure>
                  <h3>{Data.aboutSection1.name}</h3>
                  <h4>{Data.aboutSection1.role}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AboutSection;