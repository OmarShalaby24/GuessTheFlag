import React, {useEffect, useState} from 'react';
import TextFiled from '../assets/common/Text';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {CountryClass} from '../types';

type Props = {
  right: CountryClass;
  picked: CountryClass;
};

const ResultCard: React.FC<Props> = ({picked, right}: Props) => {
  const [fontColor, setFontColor] = useState('#018e42');
  useEffect(() => {
    setFontColor(picked.name !== right.name ? '#bf1a2f' : '#018e42');
  });
  return (
    <View style={[styles.container, styles.shadowBox]} key="card">
      <View style={{marginHorizontal: 0, alignItems: 'center'}}>
        <TextFiled style={{fontSize: 20, color: fontColor}}>Correct</TextFiled>
        <TouchableOpacity style={styles.shadowBox}>
          <Image style={[styles.image]} source={{uri: right.flag}} />
        </TouchableOpacity>
        <View style={styles.countryName}>
          <TextFiled style={{color: fontColor}}>{right.name}</TextFiled>
        </View>
      </View>
      {picked.name !== right.name ? (
        <View style={{marginHorizontal: 0, alignItems: 'center'}}>
          <TextFiled style={{fontSize: 20, color: fontColor}}>
            You Picked
          </TextFiled>
          <TouchableOpacity style={styles.shadowBox}>
            <Image style={styles.image} source={{uri: picked.flag}} />
          </TouchableOpacity>
          <View style={styles.countryName}>
            <TextFiled style={{color: fontColor}}>{picked.name}</TextFiled>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default ResultCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 10,
  },
  image: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: Dimensions.get('screen').width / 3.2,
    aspectRatio: 9 / 5,
  },
  countryName: {
    textAlign: 'center',
    width: 150,
    // height:
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
