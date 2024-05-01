import React, {useEffect, useState} from 'react';

import {View, StyleSheet} from 'react-native';
import Button from '../components/button';
import TextFiled from '../assets/common/Text.tsx';
import LoadingScreen from '../components/loadingScreen.tsx';

import {CountryClass, QuestionClass, RootStackParamList} from '../types.ts';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {makeQuiz} from '../utils/makeQuestion.ts';
import {RouteProp} from '@react-navigation/native';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MainMenuScreen'>;
  route: RouteProp<
    {MainMenuScreen: {countries: CountryClass[]}},
    'MainMenuScreen'
  >;
};

const MainMenu: React.FC<Props> = ({navigation, route}: Props) => {
  const {countries} = route.params;
  // const [countries, setCountries] = useState<CountryClass[]>([]);
  // const [isDataLoaded, setIsDataLoaded] = useState(false);
  const handleStartGame = async () => {
    console.log('start game');
    generateQuiz(countries)
      .then((quiz: QuestionClass[]) => {
        return navigation.navigate('QuizScreen', {quiz});
      })
      .catch(e => console.log(e));
  };
  const handleFlags = async () => {
    console.log('Show Flags');
    navigation.navigate('FlagsScreen', {countries});
  };
  const handleAbout = () => {
    console.log('About the App');
  };

  const generateQuiz = (options: CountryClass[] | []) => {
    return new Promise<
      {
        answer: CountryClass;
        options: CountryClass[];
      }[]
    >((resolve, reject) => {
      //FIXME: make it 10 questions
      const q = makeQuiz(10, options);
      resolve(q);
      reject(new Error());
    });
  };

  // const loadCountries = () => {
  //   return new Promise<CountryClass[]>((resolve, reject) => {
  //     const c: {
  //       name: string;
  //       code: string;
  //       flag: string;
  //     }[] = require('../utils/countries_data.json');
  //     resolve(c);
  //   });
  // };

  // useEffect(() => {
  //   // navigation.pop();
  //   // loadCountries().then((result: CountryClass[]) => {
  //   //   setCountries(result);
  //   // });
  //   // setIsDataLoaded(true);
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TextFiled style={styles.text}>
          Welcome To{'\n'}
          <TextFiled style={[styles.text, styles.GameName]}>GTF</TextFiled>
        </TextFiled>
        <TextFiled style={[styles.text, styles.subText]}>
          Guess The Flag
        </TextFiled>
      </View>
      <View style={styles.btnList}>
        <Button Label="Start Game" onPress={handleStartGame} />
        <Button Label="Flags" onPress={handleFlags} />
        <Button Label="About" onPress={handleAbout} />
      </View>
    </View>
  );
};

export default MainMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bbefed',
    height: '100%',
  },
  title: {
    height: '45%',
    justifyContent: 'flex-end',
  },
  text: {
    color: '#043fa7',
    fontSize: 50,
    // fontFamily: 'ConcertOne-Regular',
    // fontFamily: 'Fonarto',
    textAlign: 'center',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 10,
    textShadowColor: '#010a4b',
  },
  GameName: {
    color: '#e7f9f9',
    fontFamily: 'Fonarto',
    textShadowOffset: {width: 3, height: 3},
    letterSpacing: 5,
    fontSize: 110,
  },
  subText: {
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
    fontSize: 20,
    marginVertical: -5,
  },
  btnList: {
    height: '55%',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 60,
  },
});
