// import * as countries from './Countries.json';
// console.log(countries[0]);

import {CountryClass} from '../types';

// const countries = require('./countries_data_2.json');

export const makeQuestion = async (countries: CountryClass[]) => {
  var options = [...countries];
  var count = countries.length;

  const answer: CountryClass = options[Math.floor(Math.random() * count)];
  count--;
  options = options.filter(c => c.code !== answer.code);

  var choices: CountryClass[] = [answer];
  for (var i = 0; i < 2; i++) {
    var pickedCountry = options[Math.floor(Math.random() * count)];
    var choice = pickedCountry;
    count--;
    options = options.filter(c => c.code !== pickedCountry.code);
    choices = [...choices, choice];
  }
  var randomPositionForAnswer = Math.floor(Math.random() * 3);
  [choices[0], choices[randomPositionForAnswer]] = [
    choices[randomPositionForAnswer],
    choices[0],
  ];
  return {answer, choices};
};

export const makeQuiz = async (
  numberOfQuestions: number,
  countries: CountryClass[] | [],
) => {
  var answers: CountryClass[] = [];
  var options: CountryClass[][] = [];

  var quiz: {
    answer: CountryClass;
    options: CountryClass[];
  }[] = [];

  var answersCodes: string[] = [];

  for (var i = 0; i < numberOfQuestions; i++) {
    const {answer, choices} = await makeQuestion(countries);
    if (answersCodes.includes(answer.code)) {
      i--;
      continue;
    }
    quiz = [
      ...quiz,
      {
        answer,
        options: choices,
      },
    ];
    // answersCodes.push(answer.code);
    // answers.push(answer);
    // options.push(choices);
  }
  return quiz;
};
