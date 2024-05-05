import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import TextFiled from '../assets/common/Text';
import {CountryClass, RootStackParamList} from '../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {palette1} from '../colors';

type WelcomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MainMenuScreen'>;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  navigation,
}: WelcomeScreenProps) => {
  const fadeInAnimation = useRef(new Animated.Value(0)).current;
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [countries, setCountries] = useState<CountryClass[]>([]);

  const loadCountries = () => {
    return new Promise<CountryClass[]>((resolve, reject) => {
      const c: {
        name: string;
        code: string;
        flag: string;
      }[] = require('../utils/countries_data.json');
      resolve(c);
    });
  };
  useEffect(() => {
    Animated.timing(fadeInAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      loadCountries().then((result: CountryClass[]) => {
        setCountries(result);
      });
    });
    setIsDataLoaded(true);
  }, []);

  useEffect(() => {
    if (countries.length !== 0) {
      Animated.timing(fadeInAnimation, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'MainMenuScreen', params: {countries: countries}}],
        });
      });
    }
  }, [countries]);
  return (
    <View style={styles.container}>
      <Animated.View style={{opacity: fadeInAnimation}}>
        <TextFiled style={styles.welcomeText}>Welcome</TextFiled>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette1.background,
  },
  welcomeText: {
    fontSize: 50,
    color: palette1.logo,
  },
});
export default WelcomeScreen;
