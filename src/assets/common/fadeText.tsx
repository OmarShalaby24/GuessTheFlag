import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';
import TextFiled from './Text';
import {palette1} from '../../colors';

type Props = {
  style?: {};
  child?: string;
};

const FadeText: React.FC<Props> = ({style, child}: Props) => {
  const text = child;
  const fadeInAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeInAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeInAnimation, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        // child = '';
      });
    });
  }, []);
  return (
    <Animated.View style={{opacity: fadeInAnimation}}>
      <TextFiled style={[styles.text, style]}>{child}</TextFiled>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    color: palette1.background,
    // textShadowOffset: {width: 3, height: 3},
    // textShadowRadius: 5,
    // textShadowColor: '#000',
  },
});

export default FadeText;
