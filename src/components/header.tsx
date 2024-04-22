import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import HeaderBadge from './headerBadge';

type HeaderProps = PropsWithChildren<{
  numberOfQuestions: any;
  questionCounter: number;
  correctAnswers: number;
}>;

const Header = ({
  numberOfQuestions,
  questionCounter,
  correctAnswers,
}: HeaderProps): React.JSX.Element => {
  return (
    <View style={[styles.container, styles.shadowBox]}>
      <HeaderBadge title={'Questions'} value={questionCounter + '/10'} />
      <HeaderBadge title={'Correct'} value={correctAnswers.toString()} />
      <HeaderBadge title={'Timer'} value={'00:59'} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4eadd9',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
