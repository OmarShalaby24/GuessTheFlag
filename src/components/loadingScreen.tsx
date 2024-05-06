import React from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
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
    // // position: 'absolute',
    // top: 0,
    // right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: palette1.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 40,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  text: {
    color: palette1.logo,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
    textShadowColor: '#000',
  },
});

export default LoadingScreen;
