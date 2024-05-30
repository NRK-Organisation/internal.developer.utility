const route = require('../utils/decorators/route');
const BaseRouter = require("./BaseRouter");
const { GET, POST } = require('../utils/texts/methods');
const ErrorResponse = require("../utils/classes/ErrorResponse");
const SuccessResponse = require("../utils/classes/SuccessResponse");
const { validateOrganisationDeveloper } = require('../services/DeveloperService');

class DeveloperRouter extends BaseRouter {
    constructor() {
        super();
    }

    @route(GET, '/login')
    async developerOrganisationLogin(req, res) {
        try {
            return res.status(200).json({ message: "Login successful" });
        } catch (error) {
            var errorResponse = new ErrorResponse(error.message, null, 500, null);
            errorResponse.InternalServerError(); // Internal Server Error
            return res.status(errorResponse.statusCode).json(errorResponse.returnResponse());
        }
    }

    @route(POST, '/developer', [validateOrganisationDeveloper])
    async createOrganisationDeveloper(req, res) {
        try {
            const developer = req.body;
            return res.status(201).json(developer);
        } catch (error) {
            var errorResponse = new ErrorResponse(error.message, null, 400, null);
            errorResponse.InternalServerError(); // Internal Server Error
            return res.status(errorResponse.statusCode || 400).json(errorResponse.returnResponse());
        }
    }
}

module.exports = DeveloperRouter;