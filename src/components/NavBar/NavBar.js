import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  componentDidMount = () => {
    console.log(this.props.path)
  }
  render = () => {
    return (
      <div>
        <Menu pointing>
          <Menu.Item
            as={Link}
            to="/"
            name="Home"
            active={this.props.path === '/'}
          />
          <Menu.Item
            as={Link}
            to="/shops"
            name="Shops"
            active={this.props.path === '/shops'}
          />
          <Menu.Item
            as={Link}
            to="/about"
            name="About"
            active={this.props.path === '/about'}
          />
          <Menu.Item
            as={Link}
            to="/videos"
            name="Videos"
            active={this.props.path === '/videos'}
          />
          <Menu.Menu position="right">
            {/* <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} /> */}
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
