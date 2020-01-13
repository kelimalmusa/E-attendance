"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Deneme = /** @class */ (function () {
    function Deneme() {
    }
    Object.defineProperty(Deneme.prototype, "name", {
        /**
         * Getter name
         * @return {string}
         */
        get: function () {
            return this._name;
        },
        /**
         * Setter name
         * @param {string} value
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Deneme.prototype, "age", {
        /**
         * Getter age
         * @return {number}
         */
        get: function () {
            return this._age;
        },
        /**
         * Setter age
         * @param {number} value
         */
        set: function (value) {
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    return Deneme;
}());
exports.Deneme = Deneme;
