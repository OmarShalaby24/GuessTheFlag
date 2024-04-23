import React, {ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';

type Props = {
  children: ReactNode;
  style: object | object[];
};

const TextFiled: React.FC<Props> = ({children, style}: Props) => {
  if (typeof style == 'object') style = [style];

  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default TextFiled;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'FredokaOne-Regular',
  },
});
