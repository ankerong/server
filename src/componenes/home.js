import React, { Component } from 'react'
import { Calendar } from 'antd';
import {connect} from 'dva'
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


class Home extends Component {
    render () {
        let {homeList,title,setNewTitle} = this.props;
        console.log(this.props)
        return (
            <div className='home'>
                <div className='home_left'>
                    <img src='../images/page_07.jpg' alt='' onClick={()=>{this.playZhu('冠荣属于曼联')}} />
                    <div>
                        {
                            homeList.map((v,i)=>{
                                return  <div className='left_name' key={i}>
                                        <h4>{v.name}</h4>
                                        <p>岗位:{title}</p>
                                        <p>总积分:{v.two}</p>
                                        <p>积分排名:{v.three}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className='home_right'>
                    <div style={{ width: 300, border: '1px solid #d9d9d9',background:'#fff', borderRadius: 4 }}>
                        <Calendar fullscreen={false} />
                    </div>
                </div>
            </div>
        )
    }
}
Home.defaultProps = {
    homeList:[
        {
            name:'懵懵懵·懵子',
            one:'分部主管',
            two:'2000',
            three:'100/2500'
        }
    ]
}

let mapState = (state) => {
    return {...state.home};
}
let mapDispatch = (dispatch) => {
    console.log(dispatch)
    return {
        setNewTitle(a){
            dispatch({type:'home/setTitle',title:a});
        }
    }
}

Home = connect(mapState,mapDispatch)(Home);
export default Home;