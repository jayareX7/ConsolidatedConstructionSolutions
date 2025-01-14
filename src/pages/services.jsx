import { useState } from 'react';
import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Link from "next/link";
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';
import ContactForm2Section from "@components/sections/ContactForm2";
import Data from "@content/services/services.json"

import { getSortedServicesData } from "@library/services";




const Services = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Layouts>
      <PageBanner pageTitle={"Services"} pageDesc={"our values has vaulted us to the top of our industry."} />

<br/>
<br/>
<br/>
<br/>
      {/* Construction Services Start */}
      <section className="gap no-top construction-services">
        <div className="container">
          <Tab.Container id="services-tab-content" defaultActiveKey="tab-service-0">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="services-nav">
                <h2>{Data.ourServices.title}</h2>
                <Nav variant="pills" className="nav nav-pills mb-3">
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-0">{Data.ourServices.item1.serviceName}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-1">{Data.ourServices.item2.serviceName}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-2">{Data.ourServices.item3.serviceName}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-3">{Data.ourServices.item4.serviceName}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-4">{Data.ourServices.item5.serviceName}</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <div className="col-lg-8">
              <Tab.Content>
                <Tab.Pane eventKey="tab-service-0" title={Data.ourServices.item1.serviceName}>
                <br/>
                <br/>
                  <figure>
                    <img className="w-100" src={Data.ourServices.item1.img.url} alt={Data.ourServices.item1.img.alt} />
                    <figcaption>
                      <h3>{Data.ourServices.item1.serviceName}</h3>
                      <p>{Data.ourServices.item1.description}</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-service-1" title={Data.ourServices.item2.serviceName}>
                  <figure>
                    <img className="w-100" src={Data.ourServices.item2.img.url} alt={Data.ourServices.item2.img.alt} />
                    <figcaption>
                      <h3>{Data.ourServices.item2.serviceName}</h3>
                      <p>{Data.ourServices.item2.description}</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-service-2" title={Data.ourServices.item3.serviceName}>
                  <figure>
                    <img className="w-100" src={Data.ourServices.item3.img.url} alt={Data.ourServices.item3.img.alt} />
                    <figcaption>
                      <h3>{Data.ourServices.item3.serviceName}</h3>
                      <p>{Data.ourServices.item3.description}</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-service-3" title={Data.ourServices.item4.serviceName}>
                  <figure>
                    <img className="w-100" src={Data.ourServices.item4.img.url} alt={Data.ourServices.item4.img.alt} />
                    <figcaption>
                      <h3>{Data.ourServices.item4.serviceName}</h3>
                      <p>{Data.ourServices.item4.description}</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-service-4" title={Data.ourServices.item5.serviceName}>
                  <figure>
                    <img className="w-100" src={Data.ourServices.item5.img.url} alt={Data.ourServices.item5.img.alt} />
                    <figcaption>
                      <h3>{Data.ourServices.item5.serviceName}</h3>
                      <p>{Data.ourServices.item5.description}</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
          </Tab.Container>
        </div>
      </section>
      {/* Construction Services End */}


      {/* Video PopUp Start */}
      <div className="video-popup">
        <div className="container-fluid g-0">
          <div className="row">
            <figure>
              <img className="w-100" src={Data.serviceVideo.img} alt={Data.serviceVideo.alt}/>
            </figure>
            <a className="video-play-btn" onClick={() => setOpen(true)} style={{"cursor": "pointer"}}>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="35" height="56" viewBox="0 0 35 56"> <defs> <clipPath id="clip-video_arrow"> <rect width="35" height="56"/> </clipPath> </defs> <g id="video_arrow" data-name="video arrow" clipPath="url(#clip-video_arrow)"> <path id="Shape_1" data-name="Shape 1" d="M1362,5000.8,1327,4972V5027Z" transform="translate(-1326.998 -4971.996)" fill="rgba(0,0,0,0)"/> <path id="Shape_1_-_Outline" data-name="Shape 1 - Outline" d="M1333,5015.017l19.29-14.437L1333,4984.7v30.313M1327,5027V4972l35,28.807Z" transform="translate(-1326.998 -4971.996)"/> </g> </svg>
            </a>
          </div>
        </div>
      </div>
      <ModalVideo channel='youtube' isOpen={isOpen} videoId="uemObN8_dcw" onClose={() => setOpen(false)} />
      {/* Video PopUp Start */}

      {/* Service Style Two Start */}
      <section className="gap service-style-two">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="heading-icon" />
          </figure>
          <span>{Data.additionalServices.subtitle}</span>
          <h2>{Data.additionalServices.title}</h2>
        </div>
        <div className="container">
          <div className="row g-0">
            {props.services.map((item, key) => (
            <div key={`services-item-${key}`} className="col-lg-4 col-md-6 col-sm-12" >
              <div className="service-two-box">
                <h3><Link href={`/services/${item.id}`}>{item.title}</Link></h3>
                <p>{item.short}</p>
                <div className="service-two-icon d-flex-all justify-content-start">
                  <img src={item.image} alt={item.title} />
                  <Link href={`/services/${item.id}`}>
                    <i className="fa-solid fa-arrow-up-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      {/* Service Style Two End */}
      
      <ContactForm2Section />
    </Layouts>
  );
};
export default Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices
    }
  }
}