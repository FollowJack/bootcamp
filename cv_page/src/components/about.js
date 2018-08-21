import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const iconItems = [
  {
    imgSrc: "./img/portfolio-1.jpg",
    altText: "uFree"
  },
  {
    imgSrc: "./img/portfolio-2.jpg",
    altText: "uFree"

  },
  {
    imgSrc: "./img/portfolio-3.jpg",
    altText: "uFree"

  },
  {
    imgSrc: "./img/portfolio-4.jpg",
    altText: "uFree"

  }
];

const AboutSection = () => (
  <ScrollableAnchor id="about">
    <section className="content-section bg-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>
              Adventure craving hacker who has a passion for technology, neuroscience and badminton.
            </h2>
            <div className="row no-gutters">
              {iconItems.map((project, index) => (
                <div className="col-lg-1">
                    <img className="img-fluid" src={project.imgSrc} alt={project.altText} />
                </div>
              ))}
            </div>
            <a
              className="btn btn-dark btn-xl js-scroll-trigger"
              href="#services"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default AboutSection;
