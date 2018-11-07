import React from 'react'
import {Route,Switch,withRouter} from 'react-router-dom'

function renderRouter({routes,match}){
    return <Switch>
        {
            routes.map((item,key)=>{
                let url = match.path === '/' ? item.path : match.path+item.path;
                return <Route path={url} key={key} render={(props)=>{
                    let Transfer = item.component;
                    return <Transfer {...props} routes={item.children} />
                }} />
            })
        }
    </Switch>
}
// renderRouter = withRouter(renderRouter);//给
export default withRouter(renderRouter);