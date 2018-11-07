import Layout from '../componenes/layout'
import Login from '../componenes/login'
import Home from '../componenes/home'
import List from '../componenes/list'
import Work from '../componenes/work'
import Plan from '../componenes/plan'
import Customer from '../componenes/customer'
import College from '../componenes/college'
import Assessment from '../componenes/assessment'
import Assistant from '../componenes/assistant'
import Integral from '../componenes/integral'
import Archives from '../componenes/archives'
import Distribution from '../componenes/distribution'
import Classed from '../componenes/classed'
import Teacher from '../componenes/teacher'
import Happy from '../componenes/happy'
import Mony from '../componenes/mony'
import Quit from '../componenes/distribution'

export default [
    {
        path:'/login',
        component:Login,
        linkText:'登录'
    },
    {
        path:'/layout',
        component:Layout,
        children:[
            {
                path:'/home',
                component:Home
            },{
                path:'/list',
                component:List,
                children:[
                    {
                        path:'/archives',
                        component:Archives,
                        linkText:'档案管理'
                    },{
                        path:'/distribution',
                        component:Distribution,
                        linkText:'分配管理'
                    },{
                        path:'/classed',
                        component:Classed,
                        linkText:'课程管理'
                    },{
                        path:'/teacher',
                        component:Teacher,
                        linkText:'代课费管理'
                    },{
                        path:'/happy',
                        component:Happy,
                        linkText:'生日提醒'
                    },{
                        path:'/mony',
                        component:Mony,
                        linkText:'薪酬管理'
                    },{
                        path:'/quit',
                        component:Quit,
                        linkText:'离职管理'
                    }
                ]
            },{
                path:'/work',
                component:Work
            },{
                path:'/plan',
                component:Plan
            },{
                path:'/customer',
                component:Customer
            },{
                path:'/college',
                component:College
            },{
                path:'/assessment',
                component:Assessment
            },{
                path:'/assistant',
                component:Assistant
            },{
                path:'/integral',
                component:Integral
            }
        ]
    }
]