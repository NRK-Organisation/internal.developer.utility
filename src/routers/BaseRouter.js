const express = require('express');

class BaseRouter {
    constructor() {
        this.router = express.Router();
        this.registerRoutes();
    }

    registerRoutes() {
        const routes = this.constructor.routes || [];
        routes.forEach(({ method, path, handler, middlewares }) => {
            if (!middlewares) {
                middlewares = [];
            }
            this.router[method](path, ...middlewares, this[handler].bind(this));
        });
    }

    getRouter() {
        return this.router;
    }
}

module.exports = BaseRouter;
