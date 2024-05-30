function route(method, path, middlewares) {
    return function (target, key, descriptor) {
        if (!target.constructor.routes) {
            target.constructor.routes = [];
        }
        target.constructor.routes.push({ method, path, handler: key, middlewares });
    };
}

module.exports = route;
