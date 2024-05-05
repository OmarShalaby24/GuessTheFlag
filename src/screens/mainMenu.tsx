import React, {useEffect, useState} from 'react';

import {View, StyleSheet} from 'react-native';
import Button from '../components/button';
import TextFiled from '../assets/common/Text.tsx';
import LoadingScreen from '../components/loadingScreen.tsx';
import {palette1} from '../colors.ts';

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
    navigation.navigate('AboutScreen');
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
    backgroundColor: palette1.background,
    height: '100%',
  },
  title: {
    height: '45%',
    justifyContent: 'flex-end',
  },
  text: {
    color: palette1.text,
    fontSize: 50,
    // fontFamily: 'ConcertOne-Regular',
    // fontFamily: 'Fonarto',
    textAlign: 'center',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 5,
    textShadowColor: '#000',
  },
  GameName: {
    color: palette1.logo,
    fontFamily: 'Fonarto',
    // textShadowOffset: {width: 3, height: 3},
    // textShadowRadius: 5,
    letterSpacing: 5,
    fontSize: 110,
  },
  subText: {
    // textShadowOffset: {width: 2, height: 2},
    // textShadowRadius: 20,
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
