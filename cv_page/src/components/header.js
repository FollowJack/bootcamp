import React from 'react'

const socialSites = [
  {
    link: 'https://www.linkedin.com/in/deniel-horvatic-712982b6/',
    icon: 'icon-social-linkedin'
  },
  {
    link: 'https://twitter.com/FollowJackDev',
    icon: 'icon-social-twitter'
  },
  {
    link: 'https://github.com/FollowJack',
    icon: 'icon-social-github'
  },
  {
    link: 'mailto:d.horvatic@outlook.com',
    icon: 'icon-envelope-open'
  }
]

const Header = () => (
  <header className='masthead d-flex'>
    <div className='container text-center my-auto'>
      <h1 className='mb-1'>FollowJack</h1>
      <h3 className='mb-5'>
        <em>Curriculum Vitae</em>
      </h3>
      <ul className='list-inline mb-5'>
      {socialSites.map((site,index)=>(
        <li className='list-inline-item' key={`social_${index}`}>
          <a className='social-link rounded-circle text-white mr-3' href={site.link}>
            <i className={site.icon} />
          </a>
        </li>
      ))}
      </ul>
      <a className='btn btn-primary btn-xl js-scroll-trigger' href='#about'>
        Show me what you got!
      </a>
    </div>
    <div className='overlay' />
  </header>
)
export default Header
