import React, { Component } from 'react'
import { List, Card } from 'semantic-ui-react'

class ListViewItem extends Component {
  render = () => {
    return (
      <List.Item>
        <Card>
          <Card.Content>
            <Card.Header>
              {this.props.business.name}
            </Card.Header>
            <Card.Meta>
              {this.props.business.location}
            </Card.Meta>
            <Card.Meta>
              {this.props.business.phone}
            </Card.Meta>
            <Card.Content>
              {this.props.business.topRating}
            </Card.Content>
          </Card.Content>
        </Card>
      </List.Item>
    )
  }
}

export default ListViewItem
