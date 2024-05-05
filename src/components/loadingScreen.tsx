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
    fontSize: 40,
  },
  text: {
    color: palette1.logo,
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 5,
    textShadowColor: '#000',
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

export default LoadingScreen;
