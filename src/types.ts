import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
// import type { StackScreenProps } from '@react-navigation/stack';
// import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  MainMenuScreen: undefined;
  QuizScreen: {numberOfQuestions: number};
};

export type MainMenuParamList = {
  // QuizScreen: {numberOfQuestions: number};
};
