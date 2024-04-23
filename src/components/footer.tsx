import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
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
  button: {
    backgroundColor: '#043fa7',
    width: 100,
    // height: 50,
    paddingVertical: 10,
    // marginVertical: 7,
    borderWidth: 1,
    borderColor: '#bbefed',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#e7f9f9',
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
