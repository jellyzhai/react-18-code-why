import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import countReducer from './count';
import { applyMiddlewareCustom, log, thunkCustom } from "./middlewares";
import vueVipReducer from './vueVip';

const reducers = combineReducers({
    count: countReducer,
    vueVip: vueVipReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers);
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

applyMiddlewareCustom(store, log, thunkCustom);

export default store;