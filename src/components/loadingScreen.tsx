import React from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import TextFiled from '../assets/common/Text';

const LoadingScreen = () => {
  return (
    <View style={styles.loadingView}>
      <TextFiled style={[styles.text, styles.loadingText]}>Loading</TextFiled>
      <ActivityIndicator size="small" color="#010a4b" animating />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  loadingText: {
    fontSize: 50,
  },
  text: {
    color: '#043fa7',
  },
});

export default LoadingScreen;
