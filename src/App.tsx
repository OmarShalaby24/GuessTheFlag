import React from 'react';

import WelcomeScreen from './screens/welcomeScreen.tsx';
import MainMenuScreen from './screens/mainMenu';
import QuizScreen from './screens/quiz';
import ResultsScreen from './screens/resultsScreen.tsx';
import FlagsScreen from './screens/flags.tsx';
import AboutScreen from './screens/about.tsx';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {RootStackParamList} from './types.ts';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="MainMenuScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="MainMenuScreen" component={MainMenuScreen} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
        <Stack.Screen name="FlagsScreen" component={FlagsScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
