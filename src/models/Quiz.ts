import {QuestionClass} from './Question';

export class QuizClass {
  private _questions: Promise<QuestionClass[]>;
  constructor(numberOfQuestions: number) {
    const questions = this.generateQuiz(numberOfQuestions);
    this._questions = questions;
  }

  get questions() {
    return this._questions;
  }

  //FIXME: make me private in production
  private async generateQuiz(
    numberOfQuestions: number,
  ): Promise<QuestionClass[]> {
    var questions: QuestionClass[] = [];
    for (var i = 0; i < numberOfQuestions; i++) {
      questions = [...questions, new QuestionClass()];
    }
    return new Promise<QuestionClass[]>(resolve => resolve(questions));
  }
}
