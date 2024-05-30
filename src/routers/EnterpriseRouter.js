const _enterpriseService = require("../services/EnterpriseService");
const route = require('../utils/decorators/route');
const BaseRouter = require("./BaseRouter");
const { GET } = require('../utils/texts/methods');
const ErrorResponse = require("../utils/classes/ErrorResponse");
const SuccessResponse = require("../utils/classes/SuccessResponse");

class EnterpriseRouter extends BaseRouter {
    constructor() {
        super();
    }

    @route(GET, '/enterprise')
    async getEnterprise(req, res) {
        try {
            await _enterpriseService.getEnterprise(req, res);
        } catch (error) {
            var errorResponse = new ErrorResponse(error.message, null, 500, null);
            errorResponse.InternalServerError(); // Internal Server Error
            return res.status(errorResponse.statusCode).json(errorResponse.returnResponse());
        }
    }

    @route('post', '/enterprise')
    async createEnterprise(req, res) {
        try {
            await _enterpriseService.createEnterprise(req, res);
        } catch (error) {
            var errorResponse = new ErrorResponse(error.message, null, 500, null);
            errorResponse.InternalServerError(); // Internal Server Error
            return res.status(errorResponse.statusCode).json(errorResponse.returnResponse());
        }
    }
}

module.exports = EnterpriseRouter;