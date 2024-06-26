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
import TextFiled from '../../assets/common/Text';
import {palette1} from '../../colors';
type QuestionCardProps = PropsWithChildren<{
  questionHead: string;
  country: string;
}>;

//TODO: when user clicks on the flag he gets info about the country

const defaultImage = '../assets/images/flags/eg.png';

const QuestionCard = ({
  country,
  questionHead,
}: QuestionCardProps): React.JSX.Element => {
  // country = country !== undefined ? country : require('../assets/images/flags/eg.png')
  return (
    <View style={[styles.container, styles.shadowBox]}>
      <View style={styles.title}>
        <TextFiled style={styles.question}>{questionHead}</TextFiled>
      </View>
      <View style={[styles.imageContainer, styles.shadowBox]}>
        {country !== undefined ? (
          <Image
            style={[styles.image]}
            source={{uri: country}}
            fadeDuration={0}
          />
        ) : null}
      </View>
    </View>
  );
};

// WARN: if you gonna use the wave flags remove the image styling

export default QuestionCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: palette1.background_light,
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'black',
    width: (Dimensions.get('window').width * 8) / 10,
  },
  title: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 0,
  },
  question: {
    fontSize: 20,
    color: palette1.background,
  },
  image: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    // height: 120,
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 1.7,
    // height: Dimensions.get('window').height / 5.1,
    // width: Dimensions.get('window').width / 1.5,
    // aspectRatio: 9 / 5,
  },
  imageContainer: {
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 30,
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 1.7,
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
