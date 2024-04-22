import React from 'react';
import type {PropsWithChildren} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Option from './option';
import QuestionCard from './questionCard';

type QuestionProps = PropsWithChildren<{
  Answer: string;
  Choices: string[];
  checkAnswer: Function;
  questionNumber: number;
  path: string;
}>;

const Question = ({
  Answer,
  Choices,
  checkAnswer,
  questionNumber,
  path,
}: QuestionProps): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <QuestionCard country={path} />
      {Choices.map((option: string) => (
        <Option
          key={option.toString()}
          value={option}
          checkAnswer={() => checkAnswer(option, questionNumber)}
          questionNumber={questionNumber}
        />
      ))}
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    alignItems: 'center',
    // marginHorizontal: 50,
    // height: '20%',
    width: 360,
    // paddingBottom: 40,
  },
});
