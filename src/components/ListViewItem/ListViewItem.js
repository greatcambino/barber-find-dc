import React, { Component } from 'react'
import { List, Card, Button } from 'semantic-ui-react'
import ExpandedView from '../ExpandedView/ExpandedView'
import './ListViewItem.css'

class ListViewItem extends Component {
  state = {
    modalOpen: false
  }

  componentDidMount = () => {
    console.log(this.props)
  }

  handleEditClick = () => {
    this.setState({
      modalOpen: true
    })
  }

  render = () => {
    return (
      <List.Item>
        <Card className="list-card">
          <Card.Content>
            <Card.Header>
              {this.props.barber.name}
            </Card.Header>
            <Card.Content>
              {this.props.barber.rating}
            </Card.Content>
            <Card.Meta>
              {this.props.barber.location}
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Button floated={'right'} onClick={this.handleEditClick}>
              Expand View
            </Button>
          </Card.Content>
          {/* <ExpandedView {...this.props} modalOpen={this.state.modalOpen} /> */}
        </Card>
      </List.Item>
    )
  }
}

export default ListViewItem
