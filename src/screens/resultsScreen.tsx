import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';

import TextFiled from '../assets/common/Text';
import {SafeAreaView} from 'react-native-safe-area-context';
import ResultCard from '../components/resultCard';
import Header from '../components/header';
import Button from '../components/button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ResultRecord, RootStackParamList} from '../types';
import {RouteProp} from '@react-navigation/native';
// import ResultsScreen from './resultsScreen';

// type Params = {
//   correctAnswersBadge: number;
//   questionCounterBadge: number;
//   timeCountDownBadge: number;
// };

type ResultsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ResultsScreen'>;
  // route: RouteProp<{
  //   params: {
  //     correctAnswersBadge: number;
  //     questionCounterBadge: number;
  //     timeCountDownBadge: number;
  //     results: object[];
  //   };
  // }>;
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
  useEffect(() => {
    console.log('Correct answer - you picked');
    for (var i = 0; i < results.length; i++) {
      console.log(
        results[i].answer.name + ' - ' + results[i].pickedOption.name,
      );
    }
  });
  // const [data, setDate] = useState([
  //   {
  //     Picked: {Name: 'England', path: 'https://flagcdn.com/w160/gb-eng.png'},
  //     Right: {Name: 'England', path: 'https://flagcdn.com/w160/gb-eng.png'},
  //   },
  //   {
  //     Picked: {Name: 'Egypt', path: 'https://flagcdn.com/w160/eg.png'},
  //     Right: {Name: 'Egypt', path: 'https://flagcdn.com/w160/eg.png'},
  //   },
  //   {
  //     Picked: {Name: 'Spain', path: 'https://flagcdn.com/w160/es.png'},
  //     Right: {Name: 'Palestine', path: 'https://flagcdn.com/w160/ps.png'},
  //   },
  //   {
  //     Picked: {Name: 'Spain', path: 'https://flagcdn.com/w160/es.png'},
  //     Right: {Name: 'Palestine', path: 'https://flagcdn.com/w160/ps.png'},
  //   },
  //   {
  //     Picked: {Name: 'Spain', path: 'https://flagcdn.com/w160/es.png'},
  //     Right: {Name: 'Palestine', path: 'https://flagcdn.com/w160/ps.png'},
  //   },
  //   {
  //     Picked: {Name: 'Spain', path: 'https://flagcdn.com/w160/es.png'},
  //     Right: {Name: 'Palestine', path: 'https://flagcdn.com/w160/ps.png'},
  //   },
  // ]);
  const handleMainMenu = () => {
    navigation.popToTop();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        correctAnswers={correctAnswersBadge}
        numberOfQuestions={10}
        questionCounter={questionCounterBadge}
        timer={timeCountDownBadge}
      />
      <FlatList
        data={results}
        renderItem={({item}) => (
          <View>
            <ResultCard picked={item.pickedOption} right={item.answer} />
          </View>
        )}
      />
      <View style={styles.btnContainer}>
        <Button Label="Main Menu" onPress={handleMainMenu} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#e7f9f9',
  },
  btnContainer: {
    alignItems: 'center',
  },
});

export default ResultsScreen;
