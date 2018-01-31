import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'

import ListViewItem from '../../components/ListViewItem/ListViewItem'
import './ListView.css'

class ListView extends Component {
  componentDidMount = () => {
    let path = this.props.location.pathname
    this.setState({
      path: path
    })
  }

  state = {
    path: '',
    shops: [
      {
        name: 'demo cuts',
        location: '123 demo street, Washington, D.C., 20003',
        phone: '123-456-7890',
        topRating:
          'This is where a top rating would go, if we had an example to give...'
      },
      {
        name: 'demo cuts 2',
        location: '6129 Grey Friar Way, Dublin, OH, 43017',
        phone: '102-443-1230',
        topRating:
          'This is where a top rating would go, if we had an example to give...'
      },
      {
        name: 'demo cuts 3',
        location: '1134 demo street, Seattle, WA, 12345',
        phone: '123-456-7890',
        topRating:
          'This is where a top rating would go, if we had an example to give...'
      }
    ]
  }

  render = () => {
    return (
      <div>
        <NavBar path={this.state.path} />
        <SubHeader />
        <List className="list-view">
          {this.state.shops.map((item, idx) => {
            return (
              <ListViewItem className="list-card" business={item} key={idx} />
            )
          })}
        </List>
        <Footer year={this.props.year} />
      </div>
    )
  }
}

export default ListView
