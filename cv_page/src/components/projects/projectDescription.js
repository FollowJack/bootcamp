import React from 'react'

class ProjectDescription extends React.Component {
  render () {
    const title = 'Game of Life'
    const description = 'Game of life developed with Behaviour Driven Design approach as npm module'
    const buttonLink = 'https://github.com/FollowJack/bootcamp/tree/master/game_of_life'

    return (
      <section className='content-section bg-light'>
        <div className='container text-center'>
          <div className='row'>
            <div className='col-lg-10 mb-3 mx-auto'>
              <h2>
                {title}
              </h2>
              <div className='row'>
                <div className='col-12'>
                  {description}
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-2 mx-auto'>
              <a
                className='btn btn-dark btn-xl js-scroll-trigger'
                target='_blank' rel='noopener noreferrer'
                href={buttonLink}
              >
            Github
            </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ProjectDescription
