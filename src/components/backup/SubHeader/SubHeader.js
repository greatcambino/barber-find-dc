import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import './SubHeader.css'


class SubHeader extends Component {
    render = () => {
        return(
            <div>
                <h1>
                BarberHub
                </h1>            

                <p>
                {'> > barbershop listings + self-barbering tutorials < <'} 
                </p>
            </div>
        )
    }
}
export default SubHeader
