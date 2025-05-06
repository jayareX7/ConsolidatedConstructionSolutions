import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";


import { getAllConditionsIds, getConditionsData } from "@library/terms";

const Conditions = ( { postData } ) => {
  return (
    <Layouts transparent>
    <PageBanner pageTitle={"Terms & Conditions"} pageDesc={"our values has vaulted us to the top of our industry."} />
   
 <section className="gap">
        
         <div className="container">
           <div className="row">
               <div className="col-lg-12">
               
               <h3>{postData.subtitle}</h3>
           
               {postData.contentHtml != "" &&
          <div className="row">
            <div className="col-lg-12">
              <div dangerouslySetInnerHTML={{__html : postData.contentHtml}} />
            </div>
          </div>
          }
          
       </div>

     
                 
               </div>
           </div>
             
         
       </section>
</Layouts>
  );
};
export default Conditions;

export async function getStaticPaths() {
    const paths = getAllConditionsIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getConditionsData(params.id)

    return {
      props: {
        postData
      }
    }
}