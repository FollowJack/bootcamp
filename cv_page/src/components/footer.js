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
  }
]
const FooterSection = () => (
  <footer className='footer text-center'>
    <div className='container'>
      <ul className='list-inline mb-5'>
      {socialSites.map((site,index)=>(
        <li className='list-inline-item' key={`social_${index}`}>
          <a className='social-link rounded-circle text-white mr-3' href={site.link}>
            <i className={site.icon} />
          </a>
        </li>
      ))}
      </ul>
      <p className='text-muted small mb-0'>
        Copyright &copy FollowJack 2018
      </p>
    </div>
  </footer>
)
export default FooterSection
