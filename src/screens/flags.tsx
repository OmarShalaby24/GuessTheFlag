import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {RootStackParamList, CountryClass} from '../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import TextFiled from '../assets/common/Text';
import FlagCard from '../components/flagCard';
import Footer from '../components/footer';
import Button from '../components/button';
import LoadingScreen from '../components/loadingScreen';
import Header from '../components/header';
import {palette1} from '../colors';
import HeaderBadge from '../components/headerBadge';

type FlagsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'FlagsScreen'>;
  route: RouteProp<{FlagsScreen: {countries: CountryClass[]}}, 'FlagsScreen'>;
};

const Flags: React.FC<FlagsProps> = ({navigation, route}: FlagsProps) => {
  const [countries, setCountries] = useState<CountryClass[]>([]);
  // const [countries, setCountries] = useState<CountryClass[]>(
  //   route.params.countries,
  // );
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
    loadCountries().then((result: CountryClass[]) => {
      setCountries(result);
    });
  }, []);
  return (
    <View style={styles.container}>
      {countries.length === 0 ? (
        <LoadingScreen />
      ) : (
        <View>
          <Header>
            <HeaderBadge style={{width: 100}} title={'Flags'} />
            {/* <TextFiled style={{fontSize: 20, color: palette1.logo}}>
              Flags
            </TextFiled> */}
          </Header>
          <FlatList
            data={countries}
            numColumns={3}
            style={{width: '100%'}}
            // windowSize={5}

            keyExtractor={item => item.code}
            contentContainerStyle={styles.list}
            // initialNumToRender={6}
            renderItem={({item}) => <FlagCard country={item} />}
          />
          <View style={styles.btnContainer}>
            <Button Label="Main Menu" onPress={() => navigation.goBack()} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: palette1.background,
  },
  btnContainer: {
    // borderWidth: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    // marginHorizontal: Dimensions.get('screen').width / 2,
  },
  list: {
    justifyContent: 'space-between',
    paddingBottom: 100,
    alignItems: 'center',
  },
});

export default Flags;
