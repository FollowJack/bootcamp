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
        url: 'https://github.com/FollowJack'
      },
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/deniel-horvatic-712982b6/'
      },
      {
        title: 'Home',
        url: '#top'
      },
      {
        title: 'Services',
        url: '#services'
      },
      {
        title: 'Portfolio',
        url: '#portfolio'
      },
      {
        title: 'About',
        url: '#about'
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
          // <li className='sidebar-brand'>
          //   <a className='js-scroll-trigger' href='#top'>
          //     Start Bootstrap
          //   </a>
          </li>
          {siteNav.map(link => (
            <li
              key={link.url}
              className='sidebar-nav-item'
              onClick={() => this.onMenuItemClick()}
            >
              <a className='js-scroll-trigger' href={link.url}>
                {link.title}
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
