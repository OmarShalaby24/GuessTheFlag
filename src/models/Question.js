"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionClass = void 0;
var countries = require("../utils/countries_data.json");
var Country_1 = require("./Country");
var QuestionClass = /** @class */ (function () {
    function QuestionClass() {
        var _a = this.createQuestion(), answer = _a.answer, options = _a.options;
        this._answer = answer;
        this._options = options;
    }
    Object.defineProperty(QuestionClass.prototype, "answer", {
        get: function () {
            return this._answer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuestionClass.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    //FIXME: make me private in production
    QuestionClass.prototype.createQuestion = function () {
        var _a;
        var options = __spreadArray([], countries, true);
        var count = countries.length;
        var randomNumber = Math.floor(Math.random() * count);
        var answer = options[randomNumber];
        var answerCountry = new Country_1.CountryClass(answer.name, answer.code, 'Answer Path');
        count--;
        options = options.filter(function (c) { return c !== answer; });
        var choices = [answerCountry];
        //FIXME: make options length variable in future
        for (var i = 0; i < 2; i++) {
            randomNumber = Math.floor(Math.random() * count);
            var pickedCountry = options[randomNumber];
            var choice = new Country_1.CountryClass(pickedCountry.name, pickedCountry.code, 'an option path');
            count--;
            options = options.filter(function (c) { return c !== answer; });
            choices = __spreadArray(__spreadArray([], choices, true), [choice], false);
        }
        randomNumber = Math.floor(Math.random() * 3);
        _a = [choices[randomNumber], choices[0]], choices[0] = _a[0], choices[randomNumber] = _a[1];
        return { answer: answerCountry, options: choices };
    };
    return QuestionClass;
}());
exports.QuestionClass = QuestionClass;
