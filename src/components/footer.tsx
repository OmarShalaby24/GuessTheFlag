import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import Button from './button';

type FooterProps = PropsWithChildren<{
  buttonPress: Function;
}>;

//TODO: make a skip button for the current question and ask the question again at the end

const Footer: React.FC<FooterProps> = ({buttonPress}) => {
  return (
    <View style={styles.container}>
      <Button Label="End Quiz" onPress={buttonPress} />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
