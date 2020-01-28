"use strict";
exports.__esModule = true;
var ResultPackage = /** @class */ (function () {
    function ResultPackage() {
    }
    ResultPackage.success = function (data) {
        return { data: data, success: true };
    };
    ResultPackage.failed = function (errorMessage, errorCode, errorDetail, data) {
        return {
            data: data,
            success: false,
            errorCode: errorCode,
            errorDetail: errorDetail,
            errorMessage: errorMessage
        };
    };
    return ResultPackage;
}());
exports.ResultPackage = ResultPackage;
