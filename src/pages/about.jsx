import dynamic from "next/dynamic";

import Data from "@content/about/about.json";

import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import History from "../components/sections/History";


import CallToActionSection from "@components/sections/CallToAction";







const TeamSlider = dynamic( () => import("@components/sliders/Team"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const About = () => {
  return (
    <Layouts>
      <PageBanner pageTitle={"About Us"} pageDesc={"our values has vaulted us to the top of our industry."} />
      
      {/* About-First Start */}
      <section className="gap about-first">
        <div className="container">
          <div className="row">
            <h2>{Data.aboutUs.title}</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="who-we-are">
                <div>
                  <h3>{Data.aboutUs.subtitle}</h3>
                  <p>{Data.aboutUs.text}</p>
                </div>
                <figure>
                  <img className="w-100" src={Data.aboutUs.aboutImage1.image} alt={Data.aboutUs.aboutImage1.alt} />
                </figure>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="who-we-are space">
                <div>
                  <h3>{Data.aboutUs.listTitle}</h3>
                  <ul>
                    <li><i className="fa-solid fa-circle-dot" /> {Data.aboutUs.items.listText1}</li>
                    <li><i className="fa-solid fa-circle-dot" /> {Data.aboutUs.items.listText2}</li>
                    <li><i className="fa-solid fa-circle-dot" /> {Data.aboutUs.items.listText3}</li>
                    <li><i className="fa-solid fa-circle-dot" /> {Data.aboutUs.items.listText4}</li>
                    <li><i className="fa-solid fa-circle-dot" /> {Data.aboutUs.items.listText5}</li>
                  </ul>
                </div>
                <figure>
                  <img className="w-100" src={Data.aboutUs.aboutImage2.image} alt={Data.aboutUs.aboutImage1.alt}  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About-First End */}

     
     <History/>

      <TeamSlider noTop />
  
      <TestimonialSlider />
  <PartnersSlider noTop />

      <CallToActionSection />
   
      
    </Layouts>
  );
};
export default About;