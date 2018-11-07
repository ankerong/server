import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Aside extends Component {
    constructor(props){
        super(props);
        this.state = {
            listind:''
        }
    }
    listchange(v,i){
        this.setState({
            listind:i
        })
    }
    render () {
        let {aside} = this.props;
        let {listind} = this.state;
        return (
            <ul>
                {
                    aside && aside.map((val,index)=>{
                        return <Link to={val.path} key={index}>
                            <li className={index===listind?'actived':''} onClick={()=>this.listchange(val,index)}>{val.text}</li>
                        </Link>
                    })
                }
            </ul>
        )
    }
}
Aside.defaultProps = {
    listed:[
        {
            size:'档案管理',
            link:'/archives'
        },{
            size:'分配管理',
            link:'/distribution'
        },{
            size:'课程管理',
            link:'/classed'
        },{
            size:'代课费管理',
            link:'/teacher'
        },{
            size:'生日提醒',
            link:'/happy'
        },{
            size:'薪酬管理',
            link:'/mony'
        },{
            size:'离职管理',
            link:'/quit'
        }
    ]
}
export default Aside