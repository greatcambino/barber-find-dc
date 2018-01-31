import React, { Component } from 'react'
import { Grid, Image, Header, Card } from 'semantic-ui-react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'
import './VideoView.css'

class VideoView extends Component {

    state = {
        currentYear: '',
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

                <div>
                    <SubHeader />
                </div>
                <div className='tool-container'>
                    <div className='tools1'>
                        <Card className='tools2' fluid>
                            <Card.Header className='header'>
                                Tools
                            </Card.Header>
                            <Card.Content className='tools3' width='100%'>
                                <div style={{ width: '25vw' }}>
                                    <iframe width="100%"
                                        // height="330"
                                        src="https://www.youtube.com/embed/8kodhkH5l9Y"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                                <div style={{ width: '25vw' }}>
                                    <iframe width="100%"
                                        // height="330"
                                        src="https://www.youtube.com/embed/fyvT1u7XU28"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                                <div style={{ width: '25vw' }}>
                                    <iframe width="100%"
                                        // height="330"
                                        src="https://www.youtube.com/embed/4Vg7E0Cdhx0"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                            </Card.Content>
                        </Card>
                    </div>

                    <div>
                        <div className='tools1'>
                            <Card className='tools2' fluid>
                                <Card.Header className='header'>
                                    Cutting / Fading
                                </Card.Header>
                                <Card.Content className='tools3' width='100%'>
                                    <div style={{ width: '25vw' }}>
                                        <iframe width="100%"
                                            // height="315" 
                                            src="https://www.youtube.com/embed/0_b3fSCGyjg"
                                            frameBorder="0"
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                    <div style={{ width: '25vw' }}>
                                        <iframe width="100%"
                                            // height="315" 
                                            src="https://www.youtube.com/embed/O6Wqr6rks_0"
                                            framebBorder="0"
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                    <div style={{ width: '25vw' }}>
                                        <iframe width="100%"
                                            // height="315" 
                                            src="https://www.youtube.com/embed/lQNUP6UHP1E"
                                            frameBorder="0"
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                </Card.Content>
                            </Card>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className='tools1'>
                                <Card className='tools2' fluid>
                                    <Card.Header className='header'>
                                        Line-ups / Shape-ups
                                    </Card.Header>
                                    <Card.Content className='tools3' width='100%'>
                                        <div style={{ width: '25vw' }}>
                                            <iframe width="100%"
                                                // height="315" 
                                                src="https://www.youtube.com/embed/cemOGJngDaI"
                                                frameBorder="0"
                                                allow="autoplay; encrypted-media"
                                                allowFullScreen>
                                            </iframe>
                                        </div>
                                        <div style={{ width: '25vw' }}>
                                            <iframe width="100%"
                                                // height="315" 
                                                src="https://www.youtube.com/embed/ZFe2NuvV7ec"
                                                frameBorder="0"
                                                allow="autoplay; encrypted-media"
                                                allowFullScreen>
                                            </iframe>
                                        </div>
                                        <div style={{ width: '25vw' }}>
                                            <iframe width="100%"
                                                // height="315" 
                                                src="https://www.youtube.com/embed/GdrG7acR7ks"
                                                frameBorder="0"
                                                allow="autoplay; encrypted-media"
                                                allowFullScreen>
                                            </iframe>
                                        </div>
                                    </Card.Content>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer year={this.state.currentYear} />
            </div>
        )
    }
}


export default VideoView







