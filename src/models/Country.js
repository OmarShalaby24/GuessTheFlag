"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryClass = void 0;
var CountryClass = /** @class */ (function () {
    function CountryClass(name, code, flag) {
        this._name = name;
        this._code = code;
        this._flag = flag;
    }
    Object.defineProperty(CountryClass.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CountryClass.prototype, "code", {
        get: function () {
            return this._code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CountryClass.prototype, "flag", {
        get: function () {
            return this._flag;
        },
        enumerable: false,
        configurable: true
    });
    return CountryClass;
}());
exports.CountryClass = CountryClass;
