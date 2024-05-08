import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
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
  const [searchResult, setSearchResult] = useState<CountryClass[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFinished, setSearchFinished] = useState(true);
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

  const search = (text: string) => {
    setSearchFinished(false);
    setSearchQuery(text);
    if (text.length > 2)
      setSearchResult(
        countries.filter(c =>
          c.name.toLowerCase().includes(text.toLowerCase()),
        ),
      );
    else setSearchResult(countries);
    setSearchFinished(true);
  };

  useEffect(() => {
    loadCountries().then((result: CountryClass[]) => {
      setCountries(result);
      setSearchResult(result);
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
            <TextInput
              style={styles.searchBar}
              placeholder="Search..."
              onChangeText={search}
            />
            {/* <TextFiled style={{fontSize: 20, color: palette1.logo}}>
              Flags
            </TextFiled> */}
          </Header>
          {!searchFinished && searchResult.length === 0 ? (
            <ActivityIndicator size={'small'} color={palette1.logo} />
          ) : null}
          <FlatList
            data={searchResult}
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
  searchBar: {
    backgroundColor: palette1.text,
    width: '60%',
    fontFamily: 'FredokaOne-Regular',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 12,
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
