import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import RenderRouter from './renderRouter';
import Config from './config'

class RouterRoot extends Component{
    render(){
        return <BrowserRouter>
                    <RenderRouter routes={Config} />
                </BrowserRouter>
    }
    
}

export default RouterRoot;