const ServerBasicResponse = require("../texts/serverBasicResponse");
const Response = require("./Response");
const StatusCode = require("../classes/StatusCodes");

class ErrorResponse extends Response {
    StatusCode = new StatusCode();
    ServerBasicResponse = new ServerBasicResponse();

    constructor(message, data, statusCode = 500, error = null) {
        super(message, data, false, error, statusCode || 500);
    }

    InternalServerError() {
        this.statusCode = StatusCode.INTERNAL_SERVER_ERROR;
        this.message = ServerBasicResponse.INTERNAL_SERVER_ERROR;
    }

    BadRequest() {
        this.statusCode = StatusCode.BAD_REQUEST;
        this.message = ServerBasicResponse.BAD_REQUEST;
    }

    Unauthorized() {
        this.statusCode = StatusCode.UNAUTHORIZED;
        this.message = ServerBasicResponse.UNAUTHORIZED;
    }
}

module.exports = ErrorResponse;