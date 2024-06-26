import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';

import {TouchableOpacity, StyleSheet, Platform} from 'react-native';
import TextFiled from '../assets/common/Text';
import {palette1} from '../colors';

type ButtonProps = PropsWithChildren<{
  Label: string;
  onPress: Function;
}>;

const Button = ({Label, onPress}: ButtonProps): React.JSX.Element => {
  const [buttonStyle, setButtonStyle] = useState<{}>(styles.button);
  const onPressIn = () => {
    setButtonStyle({
      ...buttonStyle,
      backgroundColor: palette1.background_light,
      opacity: 1,
    });
  };
  const onPressOut = () => {
    setButtonStyle(styles.button);
  };
  return (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={() => onPress()}
      style={[buttonStyle, styles.shadowBox]}>
      <TextFiled style={styles.btnText}>{Label}</TextFiled>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 7,
    borderWidth: 1,
    borderColor: palette1.background_light,
    borderRadius: 30,
    paddingVertical: 12,
    backgroundColor: palette1.background,
  },
  btnText: {
    fontSize: 15,
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
