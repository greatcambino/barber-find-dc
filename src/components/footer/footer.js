import React, { Component } from 'react'
import { Menu, Item } from 'semantic-ui-react'

class Footer extends Component {
  state = {
    msg: 'hello'
  }

  render = () => {
    return (
      <Menu fixed="bottom">
        <Menu.Item header>
          &copy; Terrence Campbell, Chris Tran, Zach Bauer 2018 GA
        </Menu.Item>
      </Menu>
    )
  }
}

export default Footer
