import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
type QuestionCardProps = PropsWithChildren<{
  country: string;
}>;

//TODO: when user clicks on the flag he gets info about the country

const defaultImage = '../assets/images/flags/eg.png';

const QuestionCard = ({country}: QuestionCardProps): React.JSX.Element => {
  const path = '../';
  return (
    <View style={[styles.container, styles.shadowBox]}>
      <View style={styles.title}>
        <Text style={styles.question}>Guess the Country's Flag:</Text>
      </View>
      <View style={[styles.imageContainer, styles.shadowBox]}>
        {country !== '' ? (
          <Image style={[styles.image]} source={+country} />
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
    height: 120,
    aspectRatio: 9 / 5,
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
    fontWeight: 'bold',
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
