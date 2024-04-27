import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
// import type { StackScreenProps } from '@react-navigation/stack';
// import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  MainMenuScreen: undefined;
  QuizScreen: {quiz: QuestionClass[]};
  ResultsScreen: {
    correctAnswersBadge: number;
    questionCounterBadge: number;
    timeCountDownBadge: number;
    results: ResultRecord[];
  };
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

export type ResultRecord = {
  answer: CountryClass;
  pickedOption: CountryClass;
};
