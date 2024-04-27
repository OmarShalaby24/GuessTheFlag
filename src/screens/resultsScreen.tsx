import React, {useState} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';

import TextFiled from '../assets/common/Text';
import {SafeAreaView} from 'react-native-safe-area-context';
import ResultCard from '../components/resultCard';
import Header from '../components/header';
import Button from '../components/button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import {RouteProp} from '@react-navigation/native';

// type Params = {
//   correctAnswersBadge: number;
//   questionCounterBadge: number;
//   timeCountDownBadge: number;
// };

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ResultsScreen'>;
  route: RouteProp<{
    params: {
      correctAnswersBadge: number;
      questionCounterBadge: number;
      timeCountDownBadge: number;
      results: object[];
    };
  }>;
};

const ResultsScreen: React.FC<NavigationProps> = ({navigation, route}) => {
  // const {
  //   correctAnswersBadge,
  //   questionCounterBadge,
  //   timeCountDownBadge,
  //   results,
  // } = route.params;
  const [data, setDate] = useState([
    {
      Picked: {Name: 'England', path: 'https://flagcdn.com/w160/gb-eng.png'},
      Right: {Name: 'England', path: 'https://flagcdn.com/w160/gb-eng.png'},
    },
    {
      Picked: {Name: 'Egypt', path: 'https://flagcdn.com/w160/eg.png'},
      Right: {Name: 'Egypt', path: 'https://flagcdn.com/w160/eg.png'},
    },
    {
      Picked: {Name: 'Spain', path: 'https://flagcdn.com/w160/es.png'},
      Right: {Name: 'Palestine', path: 'https://flagcdn.com/w160/ps.png'},
    },
    {
      Picked: {Name: 'Spain', path: 'https://flagcdn.com/w160/es.png'},
      Right: {Name: 'Palestine', path: 'https://flagcdn.com/w160/ps.png'},
    },
    {
      Picked: {Name: 'Spain', path: 'https://flagcdn.com/w160/es.png'},
      Right: {Name: 'Palestine', path: 'https://flagcdn.com/w160/ps.png'},
    },
    {
      Picked: {Name: 'Spain', path: 'https://flagcdn.com/w160/es.png'},
      Right: {Name: 'Palestine', path: 'https://flagcdn.com/w160/ps.png'},
    },
  ]);
  const handleMainMenu = () => {
    navigation.popToTop();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        correctAnswers={0}
        numberOfQuestions={10}
        questionCounter={0}
        timer={0}
        // correctAnswers={correctAnswersBadge}
        // numberOfQuestions={10}
        // questionCounter={questionCounterBadge}
        // timer={timeCountDownBadge}
      />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            {/* <TextFiled style={{}}>item</TextFiled> */}
            <ResultCard picked={item.Picked} right={item.Right} />
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
