import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';

import {StyleSheet, TouchableOpacity, Platform} from 'react-native';
import TextFiled from '../assets/common/Text';
import {CountryClass} from '../types';
import {palette1} from '../colors';

type OptionProps = PropsWithChildren<{
  value: CountryClass;
  answer: CountryClass;
  checkAnswer: Function;
  // questionNumber: number;
}>;

const Option: React.FC<OptionProps> = ({
  value,
  answer,
  checkAnswer,
  // questionNumber,
}) => {
  const [buttonStyle, setButtonStyle] = useState<{}>({
    ...styles.container,
    ...styles.shadowBox,
  });
  const onPressIn = () => {
    setButtonStyle({
      ...buttonStyle,
      backgroundColor: palette1.background_light,
      opacity: 1,
    });
  };
  const onPressOut = () => {
    setButtonStyle({
      ...styles.container,
      ...styles.shadowBox,
    });
  };
  const isCorrect = (option: CountryClass) => {
    const correct = option.name === answer.name;
    if (correct) {
      setButtonStyle({
        ...buttonStyle,
        backgroundColor: '#018e42',
      });
    } else {
      setButtonStyle({
        ...buttonStyle,
        backgroundColor: '#bf1a2f',
      });
    }
    checkAnswer(option);
  };
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={() => isCorrect(value)}>
      <TextFiled style={styles.text}>{value.name}</TextFiled>
    </TouchableOpacity>
  );
};

export default Option;

const styles = StyleSheet.create({
  container: {
    marginVertical: 7,
    width: '60%',
    backgroundColor: palette1.background,
    borderWidth: 1,
    borderColor: palette1.background_light,
    borderRadius: 30,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
    // fontWeight: 'bold',
    color: palette1.text,
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
