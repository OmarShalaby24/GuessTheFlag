import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import TextFiled from '../assets/common/Text';
import {palette1} from '../colors';
import Button from '../components/button';
import {RootStackParamList} from '../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type AboutProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AboutScreen'>;
};

const About: React.FC<AboutProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <TextFiled
          style={[styles.subText, styles.title]}>{`Welcome\nto`}</TextFiled>
        <TextFiled
          style={[
            styles.subText,
            styles.title,
            {fontSize: 40, color: palette1.logo, paddingBottom: 20},
          ]}>{`Guess The Flag`}</TextFiled>
      </View>
      <ScrollView
        contentContainerStyle={{paddingBottom: 50}}
        style={{
          // borderWidth: 1,
          width: '100%',
          paddingRight: 10,
        }}>
        <View style={styles.paragraphContainer}>
          <TextFiled
            style={[styles.text, styles.title]}>{`Game modes :`}</TextFiled>
          <View style={styles.paragraphContainer}>
            <TextFiled style={styles.text}>{`- Classic mode :`}</TextFiled>
            <View style={styles.paragraphContainer}>
              <TextFiled
                style={[
                  styles.text,
                  styles.paragraph,
                ]}>{`You have 10 flags and you should answer them in less than 1 minute`}</TextFiled>
            </View>
          </View>
          <View style={styles.paragraphContainer}>
            <TextFiled
              style={styles.text}>{`- 3-lives mode : (coming soon)`}</TextFiled>
            <View style={styles.paragraphContainer}>
              <TextFiled
                style={[
                  styles.text,
                  styles.paragraph,
                ]}>{`Answer as much as you can. There is no timer, But, you have to focus as you can only make 3 mistakes`}</TextFiled>
            </View>
          </View>
          <View style={styles.paragraphContainer}>
            <TextFiled
              style={
                styles.text
              }>{`- Where is the Country : (coming soon)`}</TextFiled>
            <View style={styles.paragraphContainer}>
              <TextFiled
                style={[
                  styles.text,
                  styles.paragraph,
                ]}>{`You have to guess approximately where the shown country location. The minimum the score, the more you win`}</TextFiled>
            </View>
          </View>
        </View>
        <View style={styles.paragraphContainer}>
          <TextFiled style={[styles.text, styles.title]}>
            {`Who Am I :`}
          </TextFiled>
          <View style={styles.paragraphContainer}>
            <TextFiled
              style={[
                styles.text,
                styles.paragraph,
              ]}>{`It Doesn't matter. Just play a useful game without annoying ads.`}</TextFiled>
            <TextFiled
              style={[
                styles.text,
                styles.paragraph,
                {color: palette1.red, letterSpacing: 0},
              ]}>{`No for Genocide, No for Ethnic Cleansing`}</TextFiled>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <Button Label="Main Menu" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette1.background,
    paddingTop: 20,
    height: '100%',
  },
  title: {
    color: palette1.text,
    fontSize: 20,
    textAlign: 'center',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 5,
    textShadowColor: '#000',
  },
  GameName: {
    color: palette1.logo,
    fontFamily: 'Fonarto',
    letterSpacing: 5,
    fontSize: 110,
  },
  subText: {
    fontSize: 20,
  },
  paragraphContainer: {
    width: '100%',
    // borderWidth: 1,
    paddingVertical: 10,
    paddingLeft: 10,
    alignItems: 'flex-start',
  },
  text: {
    color: palette1.text,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  paragraph: {
    // padding: 10,
    textAlign: 'left',
  },
  btnContainer: {
    // borderWidth: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 5,
    // marginHorizontal: Dimensions.get('screen').width / 2,
  },
});

export default About;
