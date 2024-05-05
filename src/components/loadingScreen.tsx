import React from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import TextFiled from '../assets/common/Text';
import {palette1} from '../colors';

const LoadingScreen = () => {
  return (
    <View style={styles.loadingView}>
      <TextFiled style={[styles.text, styles.loadingText]}>Loading</TextFiled>
      <ActivityIndicator size="small" color={palette1.logo} animating />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingView: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    backgroundColor: palette1.background,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  loadingText: {
    fontSize: 50,
  },
  text: {
    color: palette1.logo,
  },
});

export default LoadingScreen;
