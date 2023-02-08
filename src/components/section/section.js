

import React from 'react';
import "./public/css/section.css";

export const Section = ({sectionprice, sectionphoto,sectionphotob,sectioncurrenct,sectiondays}) => {
  return (
    <section>
        <h1>Equilibrium <a href="">#3429</a></h1>
        <p>Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor.</p>
        <div>
            <div>
                <div id="icone_a" style={{backgroundImage: `url(${sectionphoto})`}}></div>
                <p>{sectionprice} {sectioncurrenct}</p>
            </div>

            <div>
                <div id="icone_b" style={{backgroundImage: `url(${sectionphotob})`}}></div>
                <p>{sectiondays} days left</p>
            </div>
        </div>
    </section>
  )
}
