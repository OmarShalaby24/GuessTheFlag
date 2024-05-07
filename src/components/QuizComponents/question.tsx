import React from 'react';
import type {PropsWithChildren} from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Option from './option';
import QuestionCard from './questionCard';
import {CountryClass, QuestionClass} from '../../types';

type QuestionProps = PropsWithChildren<{
  question: QuestionClass;
  handleSelection: Function;
}>;

const Question = ({
  question,
  handleSelection,
}: QuestionProps): React.JSX.Element => {
  const {answer, options} = question;
  const isCorrect = (selection: CountryClass) => {
    handleSelection(answer.name === selection.name, selection);
    // return answer.name === selection.name;
  };
  return (
    <View style={styles.container}>
      <QuestionCard
        country={answer.flag}
        questionHead="Guess the Country's Flag:"
      />
      {options.map((option: CountryClass) => (
        <Option
          key={option.name}
          value={option}
          answer={answer}
          checkAnswer={isCorrect}
        />
      ))}
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },
});
