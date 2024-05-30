class StatusCode {
    // 100s
    static CONTINUE = 100;
    static SWITCHING_PROTOCOLS = 101;
    static PROCESSING = 102;
    static EARLY_HINTS = 103;

    // 200s
    static OK = 200;
    static CREATED = 201;
    static ACCEPTED = 202;
    static NON_AUTHORITATIVE_INFORMATION = 203;
    static NO_CONTENT = 204;
    static RESET_CONTENT = 205;
    static PARTIAL_CONTENT = 206;
    static MULTI_STATUS = 207;
    static ALREADY_REPORTED = 208;
    static IM_USED = 226;

    // 300s
    static MULTIPLE_CHOICES = 300;
    static MOVED_PERMANENTLY = 301;
    static FOUND = 302;
    static SEE_OTHER = 303;
    static NOT_MODIFIED = 304;
    static USE_PROXY = 305;
    static SWITCH_PROXY = 306;
    static TEMPORARY_REDIRECT = 307;
    static PERMANENT_REDIRECT = 308;

    // 400s
    static BAD_REQUEST = 400;
    static UNAUTHORIZED = 401;
    static PAYMENT_REQUIRED = 402;
    static FORBIDDEN = 403;
    static NOT_FOUND = 404;
    static METHOD_NOT_ALLOWED = 405;
    static NOT_ACCEPTABLE = 406;
    static PROXY_AUTHENTICATION_REQUIRED = 407;
    static REQUEST_TIMEOUT = 408;
    static CONFLICT = 409;

    // 500s
    static INTERNAL_SERVER_ERROR = 500;
    static NOT_IMPLEMENTED = 501;
    static BAD_GATEWAY = 502;
    static SERVICE_UNAVAILABLE = 503;
    static GATEWAY_TIMEOUT = 504;
    static HTTP_VERSION_NOT_SUPPORTED = 505;
    static VARIANT_ALSO_NEGOTIATES = 506;
    static INSUFFICIENT_STORAGE = 507;
    static LOOP_DETECTED = 508;
    static NOT_EXTENDED = 510;
    static NETWORK_AUTHENTICATION_REQUIRED = 511;
    static NETWORK_CONNECT_TIMEOUT_ERROR = 599;
}

module.exports = StatusCode;