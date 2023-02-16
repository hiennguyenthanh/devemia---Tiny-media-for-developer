"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
class HttpError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.errorCode = errorCode;
        this.errorCode = errorCode;
    }
}
exports.HttpError = HttpError;
