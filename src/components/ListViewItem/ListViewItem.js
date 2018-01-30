import React, { Component } from 'react'
import { List, Container } from 'semantic-ui-react'

class ListViewItem extends Component {
  state = {
    shops: {
      shopName: 'demo cuts',
      shopLoc: '123 demo street, Washington, D.C., 20003',
      shopPhone: '123-456-7890'
    }
  }

  render = () => {
    return (
      <div>
        <List divided={true} floated={'left'}>
          <List.Item> </List.Item>
        </List>
      </div>
    )
  }
}
