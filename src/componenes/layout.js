import React, { Component } from 'react'
import Header from '../common/Header'
import RenderRouter from '../router/renderRouter';

class page extends Component {
    render () {
        // let {path} = this.props.match;
        let {routes} = this.props;
        return (
            <div className='root_box'>
                <header>
                    <Header />
                </header>
                <section>
                    <RenderRouter routes={routes} />
                </section>
            </div>
        )
    }
}

export default page