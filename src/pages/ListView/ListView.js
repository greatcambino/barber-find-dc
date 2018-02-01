import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'
import axios from 'axios'

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

    currentYear: '',
    barbers: []
  }

  componentDidMount = () => {
    let year = new Date().getFullYear()
    this.setState({
      currentYear: year
    })
    axios
      .get('http://localhost:9000')
      .catch(err => {
        console.log('error')
        console.log(err)
      })
      .then(res => {
        this.setState({
          barbers: res.data
        })
      })
  }


  render = () => {
    return (
      <div>
        <NavBar path={this.state.path} />
        <SubHeader />

        <List>
          {this.state.barbers.map((item, idx) => {
            return <ListViewItem barber={item} />

          })}
        </List>
        <Footer year={this.props.year} />
      </div>
    )
  }
}

export default ListView
