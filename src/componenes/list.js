import React, { Component } from 'react'
import Aside from '../common/aside'
import Content from '../common/content'
import RenderRouter from '../router/renderRouter';

class List extends Component {
    render () {
        let {routes} = this.props;
        let aside = routes.map(item=>{
            return {
                text:item.linkText,
                path:this.props.match.path+item.path
            }
        })
        
        return (
            <div className='list_big'>
                <Aside />
                <Content aside = {aside}>
                    <RenderRouter routes={routes} />
                </Content>
            </div>
        )
    }
}
export default List