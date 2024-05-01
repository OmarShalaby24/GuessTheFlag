import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, Platform} from 'react-native';

import Header from '../components/header';
import Footer from '../components/footer';
import LoadingScreen from '../components/loadingScreen';
import {RouteProp} from '@react-navigation/native';
import type {
  CountryClass,
  QuestionClass,
  ResultRecord,
  RootStackParamList,
} from '../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Questions from '../components/questions';

type QuizProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'QuizScreen'>;
  route: RouteProp<{QuizScreen: {quiz: QuestionClass[]}}, 'QuizScreen'>;
};

const Quiz: React.FC<QuizProps> = ({navigation, route}: QuizProps) => {
  const {quiz} = route.params;
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [results, setResults] = useState<ResultRecord[]>([]);
  const [quizEnded, setQuizEnded] = useState(false);

  const handleQuestionAnswered = useCallback(
    (isCorrectAnswer: boolean, record: ResultRecord) => {
      setQuestionNumber(questionNumber + 1);
      setCorrectAnswers(isCorrectAnswer ? correctAnswers + 1 : correctAnswers);
      setResults([...results, record]);
    },
    [questionNumber, correctAnswers, results],
  );
  const endQuiz = () => {
    setQuizEnded(true);
  };

  useEffect(() => {
    if (quizEnded === true) {
      navigation.pop();
      navigation.navigate('ResultsScreen', {
        correctAnswersBadge: correctAnswers,
        questionCounterBadge: questionNumber,
        timeCountDownBadge: timeCountDown,
        results: results,
      });
    }
  }, [quizEnded]);

  const updateQuizState = (answerIsCorrect: boolean, option: CountryClass) => {
    handleQuestionAnswered(answerIsCorrect, {
      answer: quiz[questionNumber].answer,
      pickedOption: option,
    });
  };

  const [timeCountDown, setTimeCountDown] = useState<number>(10);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      {isLoading || quiz === null ? (
        <LoadingScreen />
      ) : (
        <>
          <Header
            numberOfQuestions={10}
            correctAnswers={correctAnswers}
            questionCounter={questionNumber}
            timer={timeCountDown}
          />
          <Questions
            quiz={quiz}
            updateQuizState={updateQuizState}
            endQuiz={endQuiz}
            handleQuestionAnswered={handleQuestionAnswered}
          />

          <Footer buttonPress={endQuiz} />
        </>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bbefed',
    justifyContent: 'space-between',
    height: '100%',
  },
  shadowBox: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
