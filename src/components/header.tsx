import React, {Children} from 'react';
import type {PropsWithChildren, ReactNode} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import HeaderBadge from './headerBadge';
import {palette1} from '../colors';

type HeaderProps = {
  children?: ReactNode;
  // numberOfQuestions: number;
  // questionCounter: number;
  // correctAnswers: number;
  // timer: number;
};

const Header: React.FC<HeaderProps> = ({
  children,
}: // numberOfQuestions,
// questionCounter,
// correctAnswers,
// timer,
HeaderProps) => {
  // const timeValue = timer > 9 ? timer : '0' + timer;
  return (
    <View style={[styles.container, styles.shadowBox]}>
      {children}
      {/* <HeaderBadge
        title={'Answered'}
        value={questionCounter + '/' + numberOfQuestions}
      />
      <HeaderBadge title={'Correct'} value={correctAnswers} />
      <HeaderBadge title={'Timer'} value={`00:${timeValue}`} /> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette1.background_light,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
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
