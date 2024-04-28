import React from 'react';
import type {PropsWithChildren} from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Option from './option';
import QuestionCard from './questionCard';
import {CountryClass} from '../models/Country';
import {QuestionClass as QuestionsClass} from '../models/Question';

type QuestionProps = PropsWithChildren<{
  question: QuestionsClass;
  handleSelection: Function;
}>;

const Question = ({
  question,
  handleSelection,
}: QuestionProps): React.JSX.Element => {
  const {answer, options} = question;
  const isCorrect = (selection: CountryClass) => {
    handleSelection(answer.name === selection.name, selection);
    return answer.name === selection.name;
  };
  return (
    <View style={styles.container}>
      <QuestionCard country={answer.flag} />
      {options.map((option: CountryClass) => (
        <Option key={option.name} value={option} checkAnswer={isCorrect} />
      ))}
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },
});
