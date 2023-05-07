import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import countReducer from './count';
import vueSilverVipReducer from './vueSilverVip';

// 自定义中间件
const customMiddleWare = store => next => action => {
    console.log('RTK log action.type: ', action.type)
    return next(action);
}

const store = configureStore({
    reducer: {
        count: countReducer,
        vueSilverVip: vueSilverVipReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(customMiddleWare)
});

export default store;