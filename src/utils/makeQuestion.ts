// const countries = [
//   'Egypt',
//   'Morocco',
//   'Tunisia',
//   'Sudan',
//   'Spain',
//   'England',
//   'France',
// ];

import * as countries from './Countries.json';
// console.log(countries[0]);

export const makeQuestion = () => {
  var options = [...countries];
  var count = countries.length;

  const answer = options[Math.floor(Math.random() * count)];
  const code: string = answer.code;
  count--;
  options = options.filter(c => c !== answer);
  // console.log('after choosing an answer');
  // console.log({answer});
  // console.log({options});

  var choices: string[] = [answer.name];
  for (var i = 0; i < 2; i++) {
    var pickedCountry = options[Math.floor(Math.random() * count)];
    var choice = pickedCountry.name;
    count--;
    options = options.filter(c => c !== pickedCountry);
    choices = [...choices, choice];
    // console.log('after choosing an option');
    // console.log({choice});
    // console.log({options});
  }
  //shuffle options
  var randomPositionForAnswer = Math.floor(Math.random() * 3);
  [choices[0], choices[randomPositionForAnswer]] = [
    choices[randomPositionForAnswer],
    choices[0],
  ];
  return {answer, choices, code};
};

export const makeQuiz = (numberOfQuestions: number) => {
  var answers: string[] = [];
  var options: string[][] = [];
  var codes: string[] = [];

  for (var i = 0; i < numberOfQuestions; i++) {
    const {answer, choices, code} = makeQuestion();
    if (answers.includes(answer.name)) {
      i--;
      continue;
    }
    answers.push(answer.name);
    options.push(choices);
    codes.push(code);
  }
  return {answers, options, codes};
};

console.log(makeQuiz(5));
