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
          {`\u00A9 Terrence Campbell, Chris Tran, Zach Bauer ${this.props
            .year} GA`}
        </Menu.Item>
      </Menu>
    )
  }
}

export default Footer
