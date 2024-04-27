import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
// import type { StackScreenProps } from '@react-navigation/stack';
// import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  MainMenuScreen: undefined;
  QuizScreen: undefined;
  ResultsScreen: undefined;
};

export type MainMenuParamList = {
  // QuizScreen: {numberOfQuestions: number};
};

export type CountryClass = {
  name: string;
  code: string;
  flag: string;
};
export type QuestionClass = {
  answer: CountryClass;
  options: CountryClass[];
};
export type QuizClass = {
  questions: QuestionClass[];
};
