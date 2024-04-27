import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TextFiled from '../assets/common/Text';
type QuestionCardProps = PropsWithChildren<{
  country: string;
}>;

//TODO: when user clicks on the flag he gets info about the country

const defaultImage = '../assets/images/flags/eg.png';

const QuestionCard = ({country}: QuestionCardProps): React.JSX.Element => {
  // country = country !== undefined ? country : require('../assets/images/flags/eg.png')
  return (
    <View style={[styles.container, styles.shadowBox]}>
      <View style={styles.title}>
        <TextFiled style={styles.question}>Guess the Country's Flag:</TextFiled>
      </View>
      <View style={[styles.imageContainer, styles.shadowBox]}>
        {country !== undefined ? (
          <Image style={[styles.image]} source={{uri: country}} />
        ) : // <Image
        //   style={[styles.image]}
        //   source={{
        //     uri: 'file:///D:/Projects/React%20Native/GuessTheFlag/src/assets/images/flags/eg.png',
        //   }}
        // />
        null}
      </View>
    </View>
  );
};

// WARN: if you gonna use the wave flags remove the image styling

export default QuestionCard;

const styles = StyleSheet.create({
  image: {
    borderColor: 'black',
    borderWidth: 1,
    // height: 120,
    height: Dimensions.get('window').height / 5.5,
    width: Dimensions.get('window').width / 1.8,
    // aspectRatio: 9 / 5,
    borderRadius: 10,
  },
  container: {
    marginVertical: 20,
    backgroundColor: '#e7f9f9',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'black',
  },
  title: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 0,
  },
  question: {
    fontSize: 20,
    color: '#043fa7',
  },
  imageContainer: {
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 30,
  },
  shadowBox: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
