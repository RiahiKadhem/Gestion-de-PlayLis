import React, { Component } from 'react'
import NavComponent from '../component/nav-component'

class HeaderContainer extends Component {
    constructor () {
        super()
        this.state = {}
    }

    render () {
        return (
            <div>
                <NavComponent />

            </div>
        )
    }
}

export default HeaderContainer
