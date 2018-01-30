import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import ListViewItem from '../../components/ListViewItem/ListViewItem'
import './ListView.css'

class ListView extends Component {
  state = {
    currentYear: '',
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

  componentDidMount = () => {
    let year = new Date().getFullYear()
    this.setState({
      currentYear: year
    })
  }

  render = () => {
    return (
      <div>
        <NavBar />
        <List>
          {this.state.shops.map((item, idx) => {
            return <ListViewItem business={item} />
          })}
        </List>
        <Footer year={this.state.currentYear} />
      </div>
    )
  }
}

export default ListView
