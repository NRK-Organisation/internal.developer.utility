const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Database Access Layer Server",
            version: "0.0.1",
            description:
                "This is the Access layer for the database. It is used to access the database and perform CRUD operations on the database.",
            contact: {
                name: "API Support",
                email: "naman22khater@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:4500",
            },
        ],
    },
    apis: ["./routers/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = {
    initializaSwagger: (app, ServerBasicResponse) => {
        app.use(ServerBasicResponse.SWAGGER_API_DOCS, swaggerUi.serve, swaggerUi.setup(specs));
    }
}