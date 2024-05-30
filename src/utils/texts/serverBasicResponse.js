class ServerBasicResponse {
    static HEALTH_CHECK_RESPONSE = 'Server is up and running';
    static SERVER_STARTED_MESSAGE = 'Server is running on port';
    static SWAGGER_API_DOCS = '/swagger/api-docs';

    static DATABASE_CONNECTED_MESSAGE = 'Database connected successfully';
    static DATABASE_CONNECTION_ERROR = 'Error connecting to database';

    static INTERNAL_SERVER_ERROR = 'Internal Server Error';
    static BAD_REQUEST = 'Bad Request';
    static UNAUTHORIZED = 'Unauthorized';

    static VALIDATION_SUCCESS_CREATE_DEVELOPER = 'Developer creation successful';

    static VALIDATION_ERROR_CREATE_DEVELOPER = 'Error validating developer creation';
}

module.exports = ServerBasicResponse;