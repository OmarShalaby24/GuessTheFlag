import React, {ReactNode} from 'react';
import {StyleSheet, StyleSheetProperties, Text} from 'react-native';

type Props = {
  children: ReactNode;
  style: object | object[] | null | undefined;
};

const TextFiled: React.FC<Props> = ({children, style}: Props) => {
  if ((style !== null || style !== undefined) && typeof style == 'object')
    style = [style];

  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default TextFiled;

const styles = StyleSheet.create({
  text: {
    color: '#043fa7',
    fontFamily: 'FredokaOne-Regular',
  },
});
