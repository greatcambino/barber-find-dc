import React, { Component } from 'react'
import { Grid, Image, Header, Card } from 'semantic-ui-react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'
import './VideoView.css'

class VideoView extends Component {
  render = () => {
    return (
      <div>
        <NavBar path={this.props.location.pathname} />
        <SubHeader />
        <div className="video-container">
          <Card className="videos" fluid>
            <Card.Header className="header">Tools</Card.Header>
            <Card.Content className="video-card-content" width="100%">
              <div style={{ width: '25vw' }}>
                <iframe
                  width="100%"
                  // height="330"
                  src="https://www.youtube.com/embed/8kodhkH5l9Y"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              <div style={{ width: '25vw' }}>
                <iframe
                  width="100%"
                  // height="330"
                  src="https://www.youtube.com/embed/fyvT1u7XU28"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              <div style={{ width: '25vw' }}>
                <iframe
                  width="100%"
                  // height="330"
                  src="https://www.youtube.com/embed/4Vg7E0Cdhx0"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </Card.Content>
          </Card>
          <Card className="videos" fluid>
            <Card.Header className="header">Cutting / Fading</Card.Header>
            <Card.Content className="video-card-content" width="100%">
              <div style={{ width: '25vw' }}>
                <iframe
                  width="100%"
                  // height="315"
                  src="https://www.youtube.com/embed/0_b3fSCGyjg"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              <div style={{ width: '25vw' }}>
                <iframe
                  width="100%"
                  // height="315"
                  src="https://www.youtube.com/embed/O6Wqr6rks_0"
                  framebBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              <div style={{ width: '25vw' }}>
                <iframe
                  width="100%"
                  // height="315"
                  src="https://www.youtube.com/embed/lQNUP6UHP1E"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </Card.Content>
          </Card>
          <Card className="videos" fluid>
            <Card.Header className="header">Line-ups / Shape-ups</Card.Header>
            <Card.Content className="video-card-content" width="100%">
              <div style={{ width: '25vw' }}>
                <iframe
                  width="100%"
                  // height="315"
                  src="https://www.youtube.com/embed/cemOGJngDaI"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              <div style={{ width: '25vw' }}>
                <iframe
                  width="100%"
                  // height="315"
                  src="https://www.youtube.com/embed/ZFe2NuvV7ec"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              <div style={{ width: '25vw' }}>
                <iframe
                  width="100%"
                  // height="315"
                  src="https://www.youtube.com/embed/GdrG7acR7ks"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </Card.Content>
          </Card>
        </div>
        <Footer year={this.props.year} />
      </div>
    )
  }
}

export default VideoView
