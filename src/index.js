import React from 'react'
import './App.css';
import dva from 'dva'
import RootRouter from './router'
import home from './module/dva'
console.log(home);

const app = dva();
app.router(()=><RootRouter></RootRouter>);//挂载路由
app.model(home);//挂载模块
app.start('#root');//启动