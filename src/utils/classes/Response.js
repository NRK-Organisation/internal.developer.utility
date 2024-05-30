class Response {
    statusCode = 200;

    constructor(message, data, isSuccess = false, error = null, statusCode = 200) {
        this.message = message;
        this.data = data;
        this.isSuccess = isSuccess;
        this.error = error;
        this.statusCode = statusCode;
    }

    returnResponse () {
        return {
            isSuccess: this.isSuccess,
            message: this.message,
            data: this.data,
            error: this.error,
            statusCode: this.statusCode
        }
    }
}

module.exports = Response;