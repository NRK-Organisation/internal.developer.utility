const ErrorResponse = require("../utils/classes/ErrorResponse");
const SuccessResponse = require("../utils/classes/SuccessResponse");
const User = require("@nrk-org/models/User");
const ServerBasicResponse = require("../utils/texts/serverBasicResponse");
const validatePassword = require("../utils/functions/validatePassword");

async function createOrganisationDeveloper(req, res) {
    try {
        const developer = req.body;
        return res.status(201).json(developer);
    } catch (error) {
        var errorResponse = new ErrorResponse(error.message, null, 400, null);
        errorResponse.InternalServerError(); // Internal Server Error
        return res.status(errorResponse.statusCode || 400).json(errorResponse.returnResponse());
    }
}

async function validateOrganisationDeveloper(req, res) {
    try {
        const { password } = req.body;

        // Password validation
        const { isValid: validPassword, errors} = validatePassword(password);
        if (!validPassword) {
            var errorResponse = new ErrorResponse(ServerBasicResponse.VALIDATION_ERROR_CREATE_DEVELOPER, null, 400, errors);
            return res.status(errorResponse.statusCode || 400).json(errorResponse.returnResponse());
        }

        const successResponse = new SuccessResponse(ServerBasicResponse.VALIDATION_SUCCESS_CREATE_DEVELOPER, null, 200, null);
        return res.status(successResponse.statusCode).json(successResponse.returnResponse());
    } catch (error) {
        var errorResponse = new ErrorResponse(ServerBasicResponse.VALIDATION_ERROR_CREATE_DEVELOPER, null, 400, null);
        return res.status(errorResponse.statusCode || 400).json(errorResponse.returnResponse());
    }
}

module.exports = {
    createOrganisationDeveloper,
    validateOrganisationDeveloper
};