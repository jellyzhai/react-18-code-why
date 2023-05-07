// 自定义中间件函数
function log(store) {
    const nextDispatch = store.dispatch;

    const newDispatch = action => {
        console.log('log action.type:', action.type);
        nextDispatch(action);
    }

    store.dispatch = newDispatch;
}

export default log;