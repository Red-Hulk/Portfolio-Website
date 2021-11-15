import React from "react";

export const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
           <h1>Ervaring</h1>
           </div>
           <div className="container experience-wrapper">
               {/*  */}
               <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2019-2020</h3>
                        <h4 className="company-heading">Lucrasoft</h4>
                        <p>Dit was mijn eerste baan met betrekking tot webdevelopment.
                            Ik ben begonnen als servicemedewerker. 
                            Voornamelijk stond ik in contact met de klanten en moest ik onderhoudsgerichte taken uitvoeren.
                        </p>
                    </div>
               </div>
                {/*  */}
               <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020-Heden</h3>
                        <h4 className="company-heading">Ad-academie</h4>
                        <p>
                            Door corona kon mijn contract niet worden verlengd bij Lucrasoft. 
                            Ik wilde graag een sterke fundamentele basis bouwen als software engineer. 
                            Daarom heb ik ervoor gekozen om de HBO opleiding Informatica te volgen. 
                        </p>
                    </div>
               </div>
            </div> 
        </div>
    )
}

export default Experience;
