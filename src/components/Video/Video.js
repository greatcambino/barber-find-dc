import React, { Component } from 'react'
import { Card, Embed } from 'semantic-ui-react'

export default class Footer extends Component {
  state = {
    msg: 'hello',
    placeholder: ''
  }

  componentDidMount = () => {
    let ph = `http://img.youtube.com/vi/${this.props.video
      .videoID}/maxresdefault.jpg`
    this.setState({
      placeholder: ph
    })
  }

  render = () => {
    return (
      <Card style={{ width: '25vw' }}>
        <Card.Header>
          <h2>
            {this.props.video.header}
          </h2>
        </Card.Header>
        <Embed
          id={this.props.video.videoID}
          source={this.props.video.source}
          placeholder={this.state.placeholder}
        />
      </Card>
    )
  }
}
