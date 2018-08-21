import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
const portfolioItems = [
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "uFree",
    description: "A decentralized Ethereum visa application (dApp)"
  },
  {
    imgSrc: "./img/portfolio-2.jpg",
    heading: "Game of Life",
    description:
      "A small simulation of life with 4 basic rules."
  },
  {
    imgSrc: "./img/portfolio-3.jpg",
    heading: "TODO",
    description:
      "Lorem ipsum gonna be great!"
  },
  {
    imgSrc: "./img/portfolio-4.jpg",
    heading: "TODO",
    description:
      "Lorem ipsum you gonna be suprised!"
  }
];
const PortfolioSection = () => (
  <ScrollableAnchor id="portfolio">
    <section className="content-section">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfolio</h3>
          <h2 className="mb-5">Recent Projects</h2>
        </div>
        <div className="row no-gutters">
          {portfolioItems.map((project, index) => (
            <div className="col-lg-6" key={`portfolio_item_${index}`}>
              <a className="portfolio-item" href="">
                <span className="caption">
                  <span className="caption-content">
                    <h2>{project.heading}</h2>
                    <p className="mb-0">{project.description}</p>
                  </span>
                </span>
                <img className="img-fluid" src={project.imgSrc} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default PortfolioSection;
