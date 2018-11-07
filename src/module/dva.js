export default {
    namespace:'home',//命名空间
    state:{title:'分部主管'},//当前模块的数据
    effects:{},//当前模块要处理的副作用
    //改变数据
    reducers:{
        setTitle(state,action){
            console.log(action)
            state.title = action.title;
            return {...state};
        }
    }
}