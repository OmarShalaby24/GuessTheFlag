import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import Button from '../components/button';

type RootStackParamList = {
  MainMenu: undefined;
  Quiz: {numberOfQuestions: number};
};

type Props = NativeStackScreenProps<RootStackParamList, 'MainMenu'>;

const MainMenu: React.FC<Props> = ({navigation}: Props) => {
  const startGame = () => {
    console.log('startGame function');
    // navigation.navigate('Quiz', {screen: 'Quiz'});
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
        <Button Label="Start Game" onPress={startGame} />
        <Button Label="Flags" onPress={startGame} />
        <Button Label="About" onPress={startGame} />
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
    // textShadowRadius: 10,
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
