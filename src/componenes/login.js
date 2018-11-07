import React, { Component } from 'react'

class Login extends Component {
    loginClick(){
        let {history} = this.props;
        if(localStorage.getItem('user')!=='success'){
            alert('请获取权限');
            return;
        } else {
            history.push('/layout/home');
        }
    }
    getlogin(){
        if(localStorage.getItem('user')=='success'){
            alert('您以获取到权限，请登录');
        } else {
            localStorage.setItem('user','success');
        }
    }
    render () {
        localStorage.removeItem('user');
        return (
            <div className='login_box'>
                <div className='login'>
                    <h1>体智能管理系统</h1>
                    <input type='text' placeholder='请输入手机号' />
                    <input type='text' placeholder='请输入密码' />
                    <button onClick={()=>this.loginClick()}>登录</button>
                    <button onClick={()=>this.getlogin()}>获取权限</button>
                </div>
            </div>
        )
    }
}

export default Login