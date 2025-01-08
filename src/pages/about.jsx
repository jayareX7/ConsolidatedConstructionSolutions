import dynamic from "next/dynamic";

import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import History from "../components/sections/History";

import CallToActionSection from "@components/sections/CallToAction";
import Leadership from "../components/sections/Leadership";






const TeamSlider = dynamic( () => import("@components/sliders/Team"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const About = () => {
  return (
    <Layouts>
      <PageBanner pageTitle={"About Us"} pageDesc={"our values and vaulted us to the top of our industry."} />
      
      {/* About-First Start */}
      <section className="gap about-first">
        <div className="container">
          <div className="row">
            <h2>Construction industry representing the interests of small and medium-sized building companies</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="who-we-are">
                <div>
                  <h3>Who We Are?</h3>
                  <p>We are resolute in our mission to not only make a difference to the lives of people today but to also leave a legacy for future generations and the planet we live in. Our portfolio includes dozens of successfully completed projects of houses of different storeys, with high–quality finishes and good repairs. Building houses is our vocation!</p>
                </div>
                <figure>
                  <img className="w-100" src="/img/gallery-1.jpeg" alt="About Image One" />
                </figure>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="who-we-are space">
                <div>
                  <h3>What's in it for me?</h3>
                  <ul>
                    <li><i className="fa-solid fa-circle-dot" /> High performing, low carbon concrete solution</li>
                    <li><i className="fa-solid fa-circle-dot" /> Value for workers' skills</li>
                    <li><i className="fa-solid fa-circle-dot" /> Excellent standards in construction</li>
                    <li><i className="fa-solid fa-circle-dot" /> An inclusive industry</li>
                    <li><i className="fa-solid fa-circle-dot" /> Don't take our word for it</li>
                  </ul>
                </div>
                <figure>
                  <img className="w-100" src="/img/gallery-3.jpeg" alt="About Image Two" />
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