"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Student.prototype, "studentNo", {
        /**
         * Getter studentNo
         * @return {number}
         */
        get: function () {
            return this._studentNo;
        },
        /**
         * Setter studentNo
         * @param {number} value
         */
        set: function (value) {
            this._studentNo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "userId", {
        /**
         * Getter userId
         * @return {string}
         */
        get: function () {
            return this._userId;
        },
        /**
         * Setter userId
         * @param {string} value
         */
        set: function (value) {
            this._userId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "educationType", {
        /**
         * Getter educationType
         * @return {string}
         */
        get: function () {
            return this._educationType;
        },
        /**
         * Setter educationType
         * @param {string} value
         */
        set: function (value) {
            this._educationType = value;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}(person_1.Person));
exports.Student = Student;
