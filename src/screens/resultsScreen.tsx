import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import ResultCard from '../components/resultCard';
import Header from '../components/header';
import Button from '../components/button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ResultRecord, RootStackParamList} from '../types';
import {RouteProp} from '@react-navigation/native';
import LoadingScreen from '../components/loadingScreen';
import TextFiled from '../assets/common/Text';
import {palette1} from '../colors';
import HeaderBadge from '../components/headerBadge';

type ResultsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ResultsScreen'>;
  route: RouteProp<
    {
      ResultsScreen: {
        correctAnswersBadge: number;
        questionCounterBadge: number;
        timeCountDownBadge: number;
        results: ResultRecord[];
      };
    },
    'ResultsScreen'
  >;
};

const ResultsScreen: React.FC<ResultsProps> = ({
  navigation,
  route,
}: ResultsProps) => {
  const {
    correctAnswersBadge,
    questionCounterBadge,
    timeCountDownBadge,
    results,
  } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(results.length === 0);
  });
  const handleMainMenu = () => {
    navigation.popToTop();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <HeaderBadge
          title="Answered : "
          value={`${questionCounterBadge} / 10`}
        />
        <HeaderBadge title="Correct : " value={correctAnswersBadge} />
        <HeaderBadge
          title="Timer : "
          style={timeCountDownBadge <= 10 ? {borderColor: '#bf1a2f'} : {}}
          textStyle={timeCountDownBadge <= 10 ? {color: '#bf1a2f'} : {}}
          value={
            timeCountDownBadge > 9
              ? `00:${timeCountDownBadge}`
              : `00:0${timeCountDownBadge}`
          }
        />
      </Header>
      {isLoading ? (
        <View style={{alignItems: 'center'}}>
          <TextFiled style={{fontSize: 30, padding: 10}}>No Results</TextFiled>
        </View>
      ) : (
        <FlatList
          data={results}
          contentContainerStyle={{paddingBottom: 50, alignItems: 'center'}}
          renderItem={({item}) => (
            <View>
              <ResultCard picked={item.pickedOption} right={item.answer} />
            </View>
          )}
        />
      )}
      <View style={styles.btnContainer}>
        <Button Label="Main Menu" onPress={handleMainMenu} />
      </View>
    </SafeAreaView>
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
    bottom: 0,
    // marginHorizontal: Dimensions.get('screen').width / 2,
  },
});

export default ResultsScreen;
