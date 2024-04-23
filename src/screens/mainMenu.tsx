import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/button';
import type {RootStackParamList} from '../types.ts';

type Props = NativeStackScreenProps<RootStackParamList, 'QuizScreen'>;

const MainMenu: React.FC<Props> = ({navigation}: Props) => {
  const handleStartGame = () => {
    console.log('startGame function');
    navigation.navigate('QuizScreen', {numberOfQuestions: 10});
  };
  const handleFlags = () => {
    console.log('Show Flags');
  };
  const handleAbout = () => {
    console.log('About the App');
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>
          Welcome To{'\n'}
          <Text style={[styles.text, styles.GameName]}>GTF</Text>
        </Text>
        <Text style={[styles.text, styles.subText]}>Guess The Flag</Text>
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
    color: '#010a4b',
    fontSize: 50,
    // fontFamily: 'ConcertOne-Regular',
    fontFamily: 'Fonarto',
    textAlign: 'center',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 10,
    textShadowColor: '#043fa7',
  },
  GameName: {
    fontFamily: 'Fonarto XT',
    textShadowOffset: {width: 3, height: 3},
    letterSpacing: 10,
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
