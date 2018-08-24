import React from 'react'

class Sidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sidebarOpen: false
    }
  }
  render () {
    const siteNav = [
      {
        title: 'Github',
        url: 'https://github.com/FollowJack',
        icon: 'icon-social-github margin-right-1'
      },
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/deniel-horvatic-712982b6/',
        icon: 'icon-social-linkedin margin-right-1'
      },
      {
        title: 'Home',
        url: '#top',
        icon: 'icon-home margin-right-1'
      },
      {
        title: 'Services',
        url: '#services',
        icon: 'icon-mustache margin-right-1'
      },
      {
        title: 'Portfolio',
        url: '#portfolio',
        icon: 'icon-notebook margin-right-1'
      },
      {
        title: 'About me',
        url: '#about',
        icon: 'icon-user-following margin-right-1'
      }
    ]
    return [
      <a
        key={'nav-menu-button'}
        className='menu-toggle rounded'
        onClick={() => this.onMenuClick()}
      >
        <i
          className={`fas ${this.state.sidebarOpen ? 'fa-times' : 'fa-bars'}`}
        />
      </a>,
      <nav
        key={'nav-menu'}
        id='sidebar-wrapper'
        className={this.state.sidebarOpen ? 'active' : ''}
      >
        <ul className='sidebar-nav'>
          {siteNav.map(link => (
            <li
              key={link.url}
              className='sidebar-nav-item'
              onClick={() => this.onMenuItemClick()}
            >
              <a className='js-scroll-trigger' href={link.url}>
                <i className={link.icon} /> {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    ]
  }
  onMenuItemClick () {
    this.setState({ sidebarOpen: false })
  }
  onMenuClick () {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }
}
export default Sidebar
