import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  render = () => {
    return (
      <div>
        <Menu pointing>
          <Menu.Item
            as={Link}
            to="/barber-find-dc/"
            name="Home"
            active={this.props.path === '/'}
          />
          <Menu.Item
            as={Link}
            to="/barber-find-dc/shops"
            name="Shops"
            active={this.props.path === '/barber-find-dc/shops'}
          />
          <Menu.Item
            as={Link}
            to="/barber-find-dc/about"
            name="About"
            active={this.props.path === '/barber-find-dc/about'}
          />
          <Menu.Item
            as={Link}
            to="/barber-find-dc/videos"
            name="Videos"
            active={this.props.path === '/barber-find-dc/videos'}
          />
          <Menu.Menu position="right">
            {/* <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} /> */}
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
