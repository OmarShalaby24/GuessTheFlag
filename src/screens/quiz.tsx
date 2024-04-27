import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Platform, FlatList} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/header';
import Question from '../components/question';
import Footer from '../components/footer';
import LoadingScreen from '../components/loadingScreen';
import {RouteProp} from '@react-navigation/native';
import type {
  CountryClass,
  QuestionClass,
  QuizClass,
  ResultRecord,
  RootStackParamList,
} from '../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// NativeStackScreenProps<RootStackParamList, 'MainMenuScreen'>
// type Props = {navigation: any; quiz: QuestionClass[]};
type QuizProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'QuizScreen'>;
  route: RouteProp<{QuizScreen: {quiz: QuestionClass[]}}, 'QuizScreen'>;
};

//TODO: Create Questions here

const Quiz: React.FC<QuizProps> = ({navigation, route}: QuizProps) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [results, setResults] = useState<ResultRecord[]>([]);
  const EndQuiz = () => {
    console.log('End Quiz');
    navigation.goBack();
  };
  const {quiz} = route.params;

  const isLastQuestion = () => {
    return new Promise((resolve, reject) => {
      resolve(questionNumber >= quiz.length - 1);
    });
  };

  const checkAnswer = (option: CountryClass) => {
    setResults([
      ...results,
      {answer: quiz[questionNumber].answer, pickedOption: option},
    ]);
    if (questionNumber < quiz.length - 1) scrollTo(questionNumber + 1);
    else {
      navigation.pop();
      navigation.navigate('ResultsScreen', {
        correctAnswersBadge: correctAnswers,
        questionCounterBadge: questionNumber + 1,
        timeCountDownBadge: timeCountDown,
        results: [
          ...results,
          {answer: quiz[questionNumber].answer, pickedOption: option},
        ],
      });
    }

    setQuestionNumber(questionNumber + 1);

    if (quiz[questionNumber].answer.name === option.name) {
      console.log('Correct');
      setCorrectAnswers(correctAnswers + 1);
      // setCorrectAnswers(correctAnswers + 1);
      // setResults([...results, {answer: Answers[questionNumber], answerPath: paths[questionNumber], selection: option, selectionPath: }])
      return true;
    } else {
      console.log(
        'Not Correct, correct answer is :' + quiz[questionNumber].answer.name,
      );
      return false;
    }
  };

  const [timeCountDown, setTimeCountDown] = useState<number>(10);

  const flatListRef = useRef<FlatList<any>>(null);
  const scrollTo = (indexToScrollTo: number) =>
    flatListRef.current?.scrollToIndex({
      index: indexToScrollTo,
      animated: true,
    });

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
            questionCounter={questionNumber + 1}
            timer={timeCountDown}
          />
          <SafeAreaView>
            <FlatList
              style={styles.questionSlide}
              data={quiz}
              horizontal={true}
              ref={flatListRef}
              keyExtractor={item => item.answer.name + questionNumber}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              pagingEnabled={true}
              renderItem={({item}) => (
                <Question
                  key={item.answer.code}
                  question={item}
                  checkAnswer={checkAnswer}
                />
              )}
            />
          </SafeAreaView>
          <Footer buttonPress={EndQuiz} />
        </>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  questionSlide: {
    height: '70%',
    marginVertical: 20,
    // borderWidth: 1,
    // alignItems: 'center',
  },
  container: {
    backgroundColor: '#bbefed',
    height: '100%',
  },
  title: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: '#043fa7',
  },
  questions: {
    backgroundColor: '#e7f9f9',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e7f9f9',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
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
