import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';

import QuizScreen from './screens/quiz';
import MainMenuScreen from './screens/mainMenu';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {RootStackParamList} from './types.ts';
// type RootStackParamList = {
//   MainMenuScreen: undefined;
//   Quiz: {numberOfQuestions: number};
// };

// type Props = NativeStackScreenProps<RootStackParamList, 'MainMenu'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

//TODO: Load All data here

const App: React.FC = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QuizScreen">
        {/* <Stack.Screen
          name="MainMenuScreen"
          component={MainMenuScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="QuizScreen"
          component={QuizScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
