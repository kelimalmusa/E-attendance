"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tweet = /** @class */ (function () {
    function Tweet() {
    }
    Object.defineProperty(Tweet.prototype, "id", {
        /**
         * Getter id
         * @return {number}
         */
        get: function () {
            return this._id;
        },
        /**
         * Setter id
         * @param {number} value
         */
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tweet.prototype, "tweet", {
        /**
         * Getter tweet
         * @return {JSON}
         */
        get: function () {
            return this._tweet;
        },
        /**
         * Setter tweet
         * @param {JSON} value
         */
        set: function (value) {
            this._tweet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tweet.prototype, "studentId", {
        /**
         * Getter studentId
         * @return {number}
         */
        get: function () {
            return this._studentId;
        },
        /**
         * Setter studentId
         * @param {number} value
         */
        set: function (value) {
            this._studentId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tweet.prototype, "coursId", {
        /**
         * Getter coursId
         * @return {number}
         */
        get: function () {
            return this._coursId;
        },
        /**
         * Setter coursId
         * @param {number} value
         */
        set: function (value) {
            this._coursId = value;
        },
        enumerable: true,
        configurable: true
    });
    return Tweet;
}());
exports.Tweet = Tweet;
