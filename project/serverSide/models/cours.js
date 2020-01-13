"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cours = /** @class */ (function () {
    function Cours() {
    }
    Object.defineProperty(Cours.prototype, "id", {
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
    Object.defineProperty(Cours.prototype, "coursCode", {
        /**
         * Getter coursCode
         * @return {string}
         */
        get: function () {
            return this._coursCode;
        },
        /**
         * Setter coursCode
         * @param {string} value
         */
        set: function (value) {
            this._coursCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "coursName", {
        /**
         * Getter coursName
         * @return {string}
         */
        get: function () {
            return this._coursName;
        },
        /**
         * Setter coursName
         * @param {string} value
         */
        set: function (value) {
            this._coursName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "substation", {
        /**
         * Getter substation
         * @return {string}
         */
        get: function () {
            return this._substation;
        },
        /**
         * Setter substation
         * @param {string} value
         */
        set: function (value) {
            this._substation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "coursHours", {
        /**
         * Getter coursHours
         * @return {number}
         */
        get: function () {
            return this._coursHours;
        },
        /**
         * Setter coursHours
         * @param {number} value
         */
        set: function (value) {
            this._coursHours = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "isItPractice", {
        /**
         * Getter isItPractice
         * @return {boolean}
         */
        get: function () {
            return this._isItPractice;
        },
        /**
         * Setter isItPractice
         * @param {boolean} value
         */
        set: function (value) {
            this._isItPractice = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "coursStartHour", {
        /**
         * Getter coursStartHour
         * @return {string}
         */
        get: function () {
            return this._coursStartHour;
        },
        /**
         * Setter coursStartHour
         * @param {string} value
         */
        set: function (value) {
            this._coursStartHour = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "coursSaloon", {
        /**
         * Getter coursSaloon
         * @return {string}
         */
        get: function () {
            return this._coursSaloon;
        },
        /**
         * Setter coursSaloon
         * @param {string} value
         */
        set: function (value) {
            this._coursSaloon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "coursTeacherID", {
        /**
         * Getter coursTeacherID
         * @return {number}
         */
        get: function () {
            return this._coursTeacherID;
        },
        /**
         * Setter coursTeacherID
         * @param {number} value
         */
        set: function (value) {
            this._coursTeacherID = value;
        },
        enumerable: true,
        configurable: true
    });
    return Cours;
}());
exports.Cours = Cours;
