import Data from "@content/homepage/homepage.json";
import Link from "next/link";

const RenovationSection = () => {
  const styles = {
    parallax: {
        "backgroundImage": "url("+Data.renovation.bg_image+")"
    }
  }
  return (
    <section className="gap renovation">
        <div className="parallax" style={styles.parallax}></div>
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
            <div className="reno-data">
                <h3>{Data.renovation.subtitle}</h3>
                <h2>{Data.renovation.title}</h2>
                <p>{Data.renovation.description}</p>
                <div className="bbtn">
                <figure>
                    <img className="w-auto circle-layer" src={Data.renovation.image_circle_text.url} alt={Data.renovation.image_circle_text.alt} />
                </figure>
                <Link href={Data.renovation.link}>
                    <i className="fa-solid fa-arrow-up-long"></i>
                </Link>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default RenovationSection;