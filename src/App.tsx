import React from 'react';

import QuizScreen from './screens/quiz';
import MainMenuScreen from './screens/mainMenu';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {RootStackParamList} from './types.ts';
import ResultsScreen from './screens/resultsScreen.tsx';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenuScreen">
        <Stack.Screen
          name="MainMenuScreen"
          component={MainMenuScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QuizScreen"
          component={QuizScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResultsScreen"
          component={ResultsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
