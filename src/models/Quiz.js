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
exports.QuizClass = void 0;
var Question_1 = require("./Question");
var QuizClass = /** @class */ (function () {
    function QuizClass(numberOfQuestions) {
        var questions = this.generateQuiz(numberOfQuestions);
        this._questions = questions;
    }
    Object.defineProperty(QuizClass.prototype, "questions", {
        get: function () {
            return this._questions;
        },
        enumerable: false,
        configurable: true
    });
    //FIXME: make me private in production
    QuizClass.prototype.generateQuiz = function (numberOfQuestions) {
        var questions = [];
        for (var i = 0; i < numberOfQuestions; i++) {
            questions = __spreadArray(__spreadArray([], questions, true), [new Question_1.QuestionClass()], false);
        }
        return questions;
    };
    return QuizClass;
}());
exports.QuizClass = QuizClass;
