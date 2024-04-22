import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, StyleSheet, Platform, Image, FlatList} from 'react-native';

// import Header from '../components/header.tsx';
import {makeQuiz} from '../utils/makeQuestion.ts';
// import Footer from '../components/footer.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/header';
import Question from '../components/question';
import Footer from '../components/footer';
// import Question from '../components/question.tsx';

type QuizProps = PropsWithChildren<{}>;

//TODO: Create Questions here

const Quiz: React.FC = () => {
  // const [questionCounter, setQuestionCounter] = useState(0);
  const [Answers, setAnswers] = useState<string[]>([
    'England',
    'Brunei',
    'Paraguay',
    'Kazakhstan',
  ]);
  const [Options, setOptions] = useState<string[][]>([
    ['Czechia', 'Venezuela', 'England'],
    ['Brunei', 'Bahrain', 'Malta'],
    ['Central African Republic', 'Paraguay', 'Scotland'],
    ['Kazakhstan', 'India', 'South Sudan'],
  ]);
  const [paths, setPaths] = useState<string[]>([
    require('../assets/images/flags/England.png'),
    require('../assets/images/flags/Brunei.png'),
    require('../assets/images/flags/Paraguay.png'),
    require('../assets/images/flags/Kazakhstan.png'),
  ]);

  const [questionCounter, setQuestionCounter] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const checkAnswer = (option: string, questionNumber: number) => {
    console.log({option});
    console.log(Answers[questionNumber]);
    if (option === Answers[questionNumber]) {
      console.log('Correct');
      return true;
    } else {
      console.log('Not Correct');
      return false;
    }
  };

  const generateQuiz = () => {
    const {answers, options} = makeQuiz(5);
    setAnswers(answers);
    setOptions(options);
    for (var ans in answers) {
      console.log({ans});
      setPaths([...paths, `../assets/images/flags/${ans}.png`]);
    }
  };
  useEffect(() => {
    console.log(Answers);
  }, []);

  return (
    <View style={styles.container}>
      <Header
        numberOfQuestions={10}
        correctAnswers={correctAnswers}
        questionCounter={questionCounter}
      />
      <SafeAreaView>
        <FlatList
          style={styles.questionSlide}
          data={Options}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // scrollEnabled={false}
          // scrollEventThrottle={}
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
      <Footer />
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  TempContainer: {
    width: 360,
    // width: '10%',
    borderWidth: 2,
    alignItems: 'center',
  },
  TempImage: {
    width: 180,
    height: 120,
  },
  questionSlide: {
    height: '73%',
    marginVertical: 20,
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
