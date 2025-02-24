import Layouts from "@layouts/Layouts";
import Link from "next/link";

import { getSortedProjectsData } from "@library/projects";

import PageBanner from "@components/PageBanner";

const Portfolio = (props) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Our Projects"} pageDesc={"our values has vaulted us to the top of our industry."} />

      {/* Our Project Two Start */}
      <section className="gap project-style-one addition">
        <div className="container">
          <div className="row project-slider">
            {props.projects.map((item, key) => (
            <div key={`projects-item-${key}`} className="col-lg-6">
              <div className="project-post">
                <figure>
                  <img className="w-100" src={item.image} alt={item.title} />
                </figure>
                <div className="project-data">
                    <h3><Link href={`/projects/${item.id}`}>{item.title}</Link></h3>
                    <p>{item.short}</p>
                    <Link className="project-icon" href={`/projects/${item.id}`}>
                      <i className="fa-solid fa-angles-right" />
                    </Link>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

        
      </section>
      {/* Our Project Two End */}
      
    </Layouts>
  );
};
export default Portfolio;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}