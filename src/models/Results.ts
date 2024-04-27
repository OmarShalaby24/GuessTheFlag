import {CountryClass} from './Country';

export class QuestionResultClass {
  private _answer: CountryClass;
  private _selected: CountryClass;

  constructor(answer: CountryClass, selected: CountryClass) {
    this._answer = answer;
    this._selected = selected;
  }

  get answer() {
    return this._answer;
  }
  get selected() {
    return this._selected;
  }
}

export class ResultsClass {
  private _results: QuestionResultClass[] = [];

  addToResults(questionResult: QuestionResultClass) {
    this._results.push(questionResult);
  }
  get results() {
    return this._results;
  }
}
