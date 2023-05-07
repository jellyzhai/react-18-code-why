// 自定义thunk中间件
function thunkCustom(store) {
    const nextDispatch = store.dispatch;

    const newDispatch = action => {
        if (typeof action === 'function' ) {
            action(store.dispatch, store.getState);
        } else if (Object.prototype.toString(action).includes('Object')) {
            nextDispatch(action);
        } else {
            throw new Error('action 必须是对象或函数之一');
        }
    };

    store.dispatch = newDispatch;
}

export default thunkCustom;