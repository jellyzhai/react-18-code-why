function applyMiddlewareCustom(store, ...fns) {
    fns.forEach(fn => fn(store));
};

export default applyMiddlewareCustom;