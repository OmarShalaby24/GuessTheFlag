import React, {useEffect, useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

// import {makeQuiz} from '../utils/makeQuestion.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/header';
import Question from '../components/question';
import Footer from '../components/footer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../types';
import TextFiled from '../assets/common/Text';

type Props = NativeStackScreenProps<RootStackParamList, 'MainMenuScreen'>;

//TODO: Create Questions here

const Quiz: React.FC<Props> = ({navigation}: Props) => {
  const [Answers, setAnswers] = useState<string[]>([]);
  const [Options, setOptions] = useState<string[][]>([]);
  const [paths, setPaths] = useState<string[]>([]);

  const [questionCounter, setQuestionCounter] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const EndQuiz = () => {
    console.log('End Quiz');
    navigation.goBack();
  };

  const checkAnswer = (option: string, questionNumber: number) => {
    console.log({option});
    console.log(Answers[questionNumber]);
    console.log({questionNumber});
    if (questionNumber < Answers.length - 1) scrollTo(questionNumber + 1);
    setQuestionCounter(questionCounter + 1);
    if (option === Answers[questionNumber]) {
      console.log('Correct');
      setCorrectAnswers(correctAnswers + 1);
      return true;
    } else {
      console.log('Not Correct');
      return false;
    }
  };

  const [timeCountDown, setTimeCountDown] = useState<number>(10);

  const generateQuiz = () => {
    setAnswers([
      'England',
      'Egypt',
      'Palestine',
      'Martinique',
      'United States Virgin Islands',
      'United Nations',
      'Marshall Islands',
      'Wallis and Futuna',
      'Colombia',
      'Czechia',
    ]);
    setOptions([
      ['Czechia', 'Venezuela', 'England'],
      ['Egypt', 'Bahrain', 'Malta'],
      ['Central African Republic', 'Palestine', 'Scotland'],
      ['Martinique', 'Tokelau', 'Poland'],
      ['United States Virgin Islands', 'Malawi', 'Hong Kong'],
      ['Micronesia', 'Albania', 'United Nations'],
      ['Marshall Islands', 'Finland', 'Sint Maarten'],
      ['Venezuela', 'Wallis and Futuna', 'Oman'],
      ['Cyprus', 'Colombia', 'Slovenia'],
      ['Czechia', 'Algeria', 'Ukraine'],
    ]);
    setPaths([
      require('../assets/images/flags/gb-eng.png'),
      require('../assets/images/flags/eg.png'),
      require('../assets/images/flags/ps.png'),
      require('../assets/images/flags/mq.png'),
      require('../assets/images/flags/vi.png'),
      require('../assets/images/flags/un.png'),
      require('../assets/images/flags/mh.png'),
      require('../assets/images/flags/wf.png'),
      require('../assets/images/flags/co.png'),
      require('../assets/images/flags/cz.png'),
    ]);
    setInterval(() => {}, 1000);
    // const {answers, options, imagePaths} = makeQuiz(5);
    // setAnswers(answers);
    // setOptions(options);
    // for (var image in imagePaths) {
    //   console.log({image});
    //   // const p = `../assets/images/flags/${code}.png`;
    //   setPaths([...paths, image]);
    // }
  };
  const flatListRef = useRef<FlatList<any>>(null);
  const scrollTo = (indexToScrollTo: number) =>
    flatListRef.current?.scrollToIndex({
      index: indexToScrollTo,
      animated: true,
    });

  useEffect(() => {
    console.log(Answers);
    generateQuiz();
    setIsLoading(false);
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingView}>
          <TextFiled style={[styles.text, styles.loadingText]}>
            Loading
          </TextFiled>
          <ActivityIndicator size="small" color="#010a4b" animating />
        </View>
      ) : (
        <>
          <Header
            numberOfQuestions={10}
            correctAnswers={correctAnswers}
            questionCounter={questionCounter}
            timer={timeCountDown}
          />
          <SafeAreaView>
            <FlatList
              style={styles.questionSlide}
              data={Options}
              horizontal={true}
              ref={flatListRef}
              keyExtractor={item => item}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              pagingEnabled={true}
              renderItem={({item}) => (
                <Question
                  Answer={Answers[Options.indexOf(item)]}
                  Choices={item}
                  checkAnswer={checkAnswer}
                  questionNumber={Options.indexOf(item)}
                  path={paths[Options.indexOf(item)]}
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
  loadingView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  loadingText: {
    fontSize: 50,
  },
});
