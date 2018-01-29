import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="Home"
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="About"
            active={activeItem === 'About'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Teach Yourself!"
            active={activeItem === 'Teach Yourself'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            {/* <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} /> */}
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
