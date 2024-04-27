import * as countries from '../utils/countries_data.json';
// import storage from '../utils/storage';
import {CountryClass} from './Country';

export class QuestionClass {
  // head: string;
  private _answer: CountryClass;
  private _options: CountryClass[];
  constructor(answer?: CountryClass, options?: CountryClass[]) {
    if (answer !== undefined && options !== undefined) {
      this._answer = answer;
      this._options = options;
    } else {
      const question = this.createQuestion();
      this._answer = question.answerCountry;
      this._options = question.choices;
    }
    // if (answer === undefined && answer === undefined) {
    //   {const generatedQuestion} = this.createQuestion();
    //   answer = generatedQuestion.answer;
    //   options = generatedQuestion.options;
    // } else if (answer !== undefined && options !== undefined) {
    //   this._answer = answer;
    //   this._options = options;
    // } else throw Error;
  }

  get answer() {
    return this._answer;
  }
  get options() {
    return this._options;
  }

  //FIXME: make me private in production
  createQuestion() {
    var options = [...countries];
    var count = countries.length;
    var indexList: number[] = [];
    var choices: CountryClass[] = [];

    var randomNumber = Math.floor(Math.random() * count);
    var answerCountry: CountryClass;

    // const answer = options[randomNumber];
    // const answerCountry = new CountryClass(answer.name, answer.flag);
    // options = options.filter(c => c !== answer);

    //FIXME: make options length variable in future
    for (var i = 0; i < 2; i++) {
      randomNumber = Math.floor(Math.random() * count);
      var chosenCountry: CountryClass;
      while (indexList.find(item => item === randomNumber))
        randomNumber = Math.floor(Math.random() * count);
      // var pickedCountry = options[randomNumber];
      // var choice = new CountryClass(
      //   pickedCountry.name,
      //   pickedCountry.code,
      //   'an option path',
      // );
      // count--;
      // options = options.filter(c => c !== answer);
      // choices = [...choices, choice];
    }
    randomNumber = Math.floor(Math.random() * 3);
    [choices[0], choices[randomNumber]] = [choices[randomNumber], choices[0]];

    return {answerCountry, choices};
  }
}
