import React, {useCallback, useRef, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {CountryClass, QuestionClass} from '../../types';
import Question from './question';

interface QuestionsProps {
  quiz: QuestionClass[];
  updateQuizState: Function;
  endQuiz: Function;
  handleQuestionAnswered: Function;
}

const Questions: React.FC<QuestionsProps> = ({
  quiz,
  updateQuizState,
  endQuiz,
  handleQuestionAnswered,
}) => {
  const [questionsListState, setQuestionListState] = useState({
    currentQuestion: 0,
    totalCorrectAnswers: 0,
  });
  const flatListRef = useRef<FlatList<any>>(null);
  const scrollTo = (indexToScrollTo: number) =>
    flatListRef.current?.scrollToIndex({
      index: indexToScrollTo,
      animated: true,
    });

  const handleQuestionsState = useCallback(
    (rightChoice: boolean) => {
      setQuestionListState(s => {
        return {
          currentQuestion: s.currentQuestion + 1,
          totalCorrectAnswers: rightChoice
            ? s.totalCorrectAnswers + 1
            : s.totalCorrectAnswers,
        };
      });
    },
    [questionsListState],
  );
  const optionSelected = (isCorrectAnswer: boolean, option: CountryClass) => {
    if (questionsListState.currentQuestion < quiz.length - 1) {
      setTimeout(() => {
        scrollTo(questionsListState.currentQuestion + 1);
      }, 500);
    } else {
      endQuiz();
    }
    handleQuestionAnswered();
    handleQuestionsState(isCorrectAnswer);
    updateQuizState(isCorrectAnswer, option);
  };

  return (
    <SafeAreaView>
      <FlatList
        style={styles.questionSlide}
        data={quiz}
        horizontal={true}
        ref={flatListRef}
        keyExtractor={item => item.answer.name}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        pagingEnabled={true}
        renderItem={({item}) => (
          <Question
            key={item.answer.code}
            question={item}
            handleSelection={optionSelected}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  questionSlide: {
    // height: '70%',
    marginVertical: 20,
  },
});

export default Questions;
