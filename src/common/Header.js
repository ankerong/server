import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import {hash} from  '../util'
import { Badge } from 'antd';
import 'antd/dist/antd.css'
import '../fonts/iconfont.css'

class HeaderNav extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            string:''
        }
    }

    changeInd(val,index){
        window.tt = this.props;
        this.setState({
            string:index
        })
    }
    render(){
        let {navlist,match} = this.props;
        let {string} = this.state;
        return <div className='box'>
            <h1><img src='../images/page_03.jpg' alt='' /></h1>
            <ul className='middlist'>
                {
                    navlist.map((item,key)=>{
                        return <Link to={match.path+item.link} key={hash()}>
                            <li className={key===string?'active':''} onClick={()=>this.changeInd(item,key)}>{item.text}</li>
                        </Link>
                    })
                }
            </ul>
            <div className='user'>jim 阳光</div>
            <div className='info'><i className="icon iconfont icon-xiazai"></i><Badge count={5} />通知栏</div>
        </div>
    }
};
HeaderNav.defaultProps = {
    navlist:[
        {text:'首页',id:1,link:'/home'},
        {text:'员工列表',id:1,link:'/list'},
        {text:'员工考勤',id:2,link:'/work'},
        {text:'工作计划',id:3,link:'/plan'},
        {text:'客户管理',id:4,link:'/customer'},
        {text:'亚太学院',id:5,link:'/college'},
        {text:'级别考核',id:6,link:'/assessment'},
        {text:'管理助手',id:7,link:'/assistant'},
        {text:'积分管理',id:8,link:'/integral'}
    ]
}
export default withRouter(HeaderNav);