import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

const iconItems = [
  {
    imgSrc: './img/js.png',
    altText: 'JS'
  },
  {
    imgSrc: './img/nodeJs.png',
    altText: 'Node'
  },
  {
    imgSrc: './img/python.png',
    altText: 'Python'
  },
  {
    imgSrc: './img/ethereum.png',
    altText: 'Ethereum'
  },
  {
    imgSrc: './img/solidity.svg',
    altText: 'Solidity'
  },
  {
    imgSrc: './img/truffle.png',
    altText: 'Truffle'
  },
  {
    imgSrc: './img/openZeppelin.png',
    altText: 'OpenZeppelin'
  },
  {
    imgSrc: './img/metamask.svg',
    altText: 'MetaMask'
  },
  {
    imgSrc: './img/ganache.png',
    altText: 'Ganache-CLI'
  },
  {
    imgSrc: './img/react.png',
    altText: 'React'
  },
  {
    imgSrc: './img/angular.png',
    altText: 'Angular'
  },
  {
    imgSrc: './img/mocha.svg',
    altText: 'Mocha'
  },
  {
    imgSrc: './img/bootstrap.png',
    altText: 'Bootstrap'
  },
  {
    imgSrc: './img/npm.png',
    altText: 'NPM'
  },
  {
    imgSrc: './img/html5.png',
    altText: 'HTML5'
  },
  {
    imgSrc: './img/css3.png',
    altText: 'CSS3'
  },
  {
    imgSrc: './img/ubuntu.png',
    altText: 'Ubuntu'
  },
  {
    imgSrc: './img/apple.png',
    altText: 'MacOS'
  }
]

const AboutSection = () => (
  <ScrollableAnchor id='about'>
    <section className='content-section bg-light'>
      <div className='container text-center'>
        <div className='row'>
          <div className='col-lg-10 mb-3 mx-auto'>
            <h2 className='mb-5'>
              Adventure craving hacker who has a passion for technology, neuroscience and badminton.
            </h2>
            <div className='row'>
              {iconItems.map((project, index) => (
                <div className='col-lg-2 col-3 col-xs-2 mb-3 align-content-center'>
                  <img className='img-fluid' src={project.imgSrc} title={project.altText} alt={project.altText} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-2 mx-auto'>
            <a
              className='btn btn-dark btn-xl js-scroll-trigger'
              target='_blank' rel='noopener noreferrer'
              href='https://drive.google.com/open?id=1BvljZFpBKQZq_LCMDO_wn80jQuapXCo4'
            >
          Download CV
          </a>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
)

export default AboutSection
