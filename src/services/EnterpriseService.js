const ErrorResponse = require("../utils/classes/ErrorResponse");
const SuccessResponse = require("../utils/classes/SuccessResponse");
const EnterpriseModel = require("@nrk-org/models/Enterprise");

async function getEnterprise(req, res) {
    try {
        const enterprise = await EnterpriseModel.find({});
        const successResponse = new SuccessResponse("Enterprise retrieved successfully", enterprise, 200, null);
        return res.status(successResponse.statusCode).json(successResponse.returnResponse());
    } catch (error) {
        var errorResponse = new ErrorResponse(error.message, null, 400, null);
        errorResponse.InternalServerError(); // Internal Server Error
        return res.status(errorResponse.statusCode || 400).json(errorResponse.returnResponse());
    }
}

async function createEnterprise(req, res) {
    try {
        const enterprise = req.body;
        return res.status(201).json(enterprise);
    } catch (error) {
        var errorResponse = new ErrorResponse(error.message, null, 400, null);
        errorResponse.InternalServerError(); // Internal Server Error
        return res.status(errorResponse.statusCode || 400).json(errorResponse.returnResponse());
    }
}

module.exports = {
    getEnterprise,
    createEnterprise
}