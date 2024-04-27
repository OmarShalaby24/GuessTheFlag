import React from 'react';
import type {PropsWithChildren} from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Option from './option';
import QuestionCard from './questionCard';
import {CountryClass} from '../models/Country';
import {QuestionClass as QuestionsClass} from '../models/Question';

type QuestionProps = PropsWithChildren<{
  // answer: Country;
  // options: Country[];
  question: QuestionsClass;
  checkAnswer: Function;
  // questionNumber: number;
  // path: string;
}>;

const Question = ({
  question,
  checkAnswer,
}: QuestionProps): React.JSX.Element => {
  // if (path === null) console.log(answer);
  const {answer, options} = question;
  return (
    <View style={styles.container}>
      <QuestionCard country={answer.flag} />
      {options.map((option: CountryClass) => (
        <Option
          key={option.code}
          value={option}
          checkAnswer={() => checkAnswer(option)}
        />
      ))}
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    // borderColor: 'red',
    // borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 50,
    // height: '20%',
    // width: 360,
    width: Dimensions.get('window').width,
    // paddingBottom: 40,
  },
});
