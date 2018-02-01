import React, { Component } from 'react'
import { List, Card, Button } from 'semantic-ui-react'
import ExpandedView from '../ExpandedView/ExpandedView'
import './ListViewItem.css'

class ListViewItem extends Component {
  state = {
    expandoOpen: false
  }

  handleExpandClick = e => {
    e.preventDefault()
    this.setState({
      expandoOpen: true
    })
  }

  closeModal = e => {
    e.preventDefault()
    this.setState({
      expandoOpen: false
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
              <br />
              {this.props.barber.address}
            </Card.Content>
          </Card.Content>
          <Card.Content extra>
            <Button floated={'right'} onClick={this.handleExpandClick}>
              Expand View
            </Button>
          </Card.Content>
        </Card>
        <ExpandedView
          {...this.props}
          expandoOpen={this.state.modalOpen}
          closeModal={this.closeModal}
        />
      </List.Item>
    )
  }
}

export default ListViewItem
