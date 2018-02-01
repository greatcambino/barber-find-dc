import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'
import Video from '../../components/Video/Video'
import './VideoView.css'

class VideoView extends Component {
  state = {
    tools: [
      {
        header: 'Tools 1',
        videoID: '8kodhkH5l9Y',
        source: 'youtube'
      },
      {
        header: 'Tools 2',
        videoID: 'fyvT1u7XU28',
        source: 'youtube'
      },
      {
        header: 'Tools 3',
        videoID: '4Vg7E0Cdhx0',
        source: 'youtube'
      }
    ],
    cutFade: [
      {
        header: 'Cutting/Fading 1',
        videoID: '0_b3fSCGyjg',
        source: 'youtube'
      },
      {
        header: 'Cutting/Fading 2',
        videoID: 'O6Wqr6rks_0',
        source: 'youtube'
      },
      {
        header: 'Cutting/Fading 3',
        videoID: 'lQNUP6UHP1E',
        source: 'youtube'
      }
    ],
    lineShape: [
      {
        header: 'Lineups/Shapeups 1',
        videoID: 'cemOGJngDaI',
        source: 'youtube'
      },
      {
        header: 'Lineups/Shapeups 2',
        videoID: 'ZFe2NuvV7ec',
        source: 'youtube'
      },
      {
        header: 'Lineups/Shapeups 3',
        videoID: 'GdrG7acR7ks',
        source: 'youtube'
      }
    ]
  }

  render = () => {
    return (
      <div>
        <NavBar path={this.props.location.pathname} />
        <SubHeader />
        <div className="top-card-container">
          <div className="card-container">
            <Card fluid>
              <Card.Header className="header">Tools</Card.Header>
              <Card.Content>
                <div className="video-container">
                  {this.state.tools.map((item, idx) => {
                    return <Video video={item} key={idx} />
                  })}
                </div>
              </Card.Content>
            </Card>
            <Card fluid>
              <Card.Header className="header">Cutting / Fading</Card.Header>
              <Card.Content>
                <div className="video-container">
                  {this.state.cutFade.map((item, idx) => {
                    return <Video video={item} key={idx} />
                  })}
                </div>
              </Card.Content>
            </Card>
            <Card fluid>
              <Card.Header className="header">Line-ups / Shape-ups</Card.Header>
              <Card.Content>
                <div className="video-container">
                  {this.state.lineShape.map((item, idx) => {
                    return <Video video={item} key={idx} />
                  })}
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>
        <Footer year={this.props.year} />
      </div>
    )
  }
}

export default VideoView
