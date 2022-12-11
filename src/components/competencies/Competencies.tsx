import React from "react";
import "./competencies.css";
export function Competencies() {
  document.body.style.backgroundColor = "#EBEDE8";
  document.body.style.minHeight = "100vh";
  return (
    <React.Fragment>
      <h2>Kompetenser</h2>
      <div className="flexGroup">
        <div className="flexGroup1">
          <div className="html flexItem">
            <h3>HTML</h3>
            <div className="holder">
              <div
                className="htmlFill"
                data-aos="flip-right"
                data-aos-duration="1200"
              />
            </div>
          </div>
          <div className="react flexItem">
            <h3>React</h3>
            <div className="holder">
              <div
                className="reactFill"
                data-aos="flip-right"
                data-aos-duration="1200"
              />
            </div>
          </div>
          <div className="angular flexItem">
            <h3>Angular</h3>
            <div className="holder">
              <div
                className="angularFill"
                data-aos="flip-right"
                data-aos-duration="1200"
              />
            </div>
          </div>
          <div className="typescript flexItem">
            <h3>Typescript</h3>
            <div className="holder">
              <div
                className="typescriptFill"
                data-aos="flip-right"
                data-aos-duration="1200"
              />
            </div>
          </div>
          <div className="wordpress flexItem">
            <h3>Wordpress</h3>
            <div className="holder">
              <div
                className="wordpressFill"
                data-aos="flip-right"
                data-aos-duration="1200"
              />
            </div>
          </div>
          <div className="ux flexItem">
            <h3>UX</h3>
            <div className="holder">
              <div
                className="uxFill"
                data-aos="flip-right"
                data-aos-duration="1200"
              />
            </div>
          </div>
        </div>
        <div className="flexGroup2">
          <div className="css flexItem">
            <h3>CSS/SCSS</h3>
            <div className="holder">
              <div
                className="cssFill"
                data-aos="flip-right"
                data-aos-duration="1200"
              />
            </div>
          </div>
          <div className="vanillajs flexItem">
            <h3>VanillaJs</h3>
            <div className="holder">
              <div
                className="vanillajsFill"
                data-aos="flip-right"
                data-aos-duration="1200"
              />
            </div>
          </div>
          <div className="figma flexItem">
            <h3>Figma/Adobe Xd</h3>
            <div className="holder">
              <div
                className="figmaFill"
                data-aos="flip-right"
                data-aos-duration="1200"
              />
            </div>
          </div>
          <div className="seo flexItem">
            <h3>SEO</h3>
            <div className="holder">
              <div
                className="seoFill"
                data-aos="flip-right"
                data-aos-duration="1200"
              />
            </div>
          </div>
          <div className="mysql flexItem">
            <h3>MySQL/NoSQL</h3>
            <div className="holder">
              <div
                className="mysqlFill"
                data-aos="flip-right"
                data-aos-duration="1200"
              />
            </div>
          </div>
          <div className="jquery flexItem">
            <h3>jQuery</h3>
            <div className="holder">
              <div
                className="jqueryFill"
                data-aos="flip-right"
                data-aos-duration="1200"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
