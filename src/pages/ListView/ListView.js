// import components
import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import NavBar from '../../components/NavBar/NavBar'
// import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'
import axios from 'axios'
import AddForm from '../../components/AddForm/AddForm'

import ListViewItem from '../../components/ListViewItem/ListViewItem'
import './ListView.css'

// create component
class ListView extends Component {
  componentDidMount = () => {
    let path = this.props.location.pathname
    // initialize state
    this.setState({
      path: path
    })
  }

  // set state
  state = {
    currentYear: '',
    barbers: []
  }

  // get year when component mounts
  componentDidMount = () => {
    let year = new Date().getFullYear()
    // set year
    this.setState({
      currentYear: year
    })
    // axios call to get data from database
    axios
      .get('http://localhost:9000')
      .then((res, err) => {
        // set state variable to data received from call
        this.setState({
          barbers: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  // render component
  render = () => {
    return (
      <div>
        <NavBar path={this.state.path} />
        <SubHeader />
        <div className="list">
          <List>
            <div className="list-view">
              {this.state.barbers.map((item, idx) => {
                return <ListViewItem barber={item} key={idx} />
              })}
              <div>
              <AddForm/>
              </div>
            </div>
          </List>
        </div>
        {/* <Footer year={this.props.year} /> */}

      </div>

    )
  }

}

// export component
export default ListView
