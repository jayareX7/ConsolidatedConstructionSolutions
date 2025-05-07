import Data from "@content/about/about.json";
import Link from "next/link";

const CallToActionSection = () => {
  return (
    <section className="cta-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="cta-data">
                        <h2>{Data.CTA.title}</h2>
                        <p>{Data.CTA.description}</p>
                        <Link href={Data.CTA.button.link} className="theme-btn">
                            {Data.CTA.button.label}  
                            <i className="fa-solid fa-angles-right" />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-5" >
                    <div className="cta-data">
                        <figure>
                            <img src={Data.CTA.image.url} alt={Data.CTA.image.alt} />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CallToActionSection;