import React, { Component } from 'react'
import Aside from './aside'

class Content extends Component {
    render () {
        let {aside} = this.props;
        console.log(this.props.children)
        return (
            <div className='list_box'>
                <div className='list_left'>
                    <Aside aside={aside} />
                </div>
                <div className='list_right'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Content