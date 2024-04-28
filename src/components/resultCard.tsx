import React from 'react';
import TextFiled from '../assets/common/Text';
import {
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
  return (
    <View style={[styles.container, styles.shadowBox]}>
      <View style={{marginHorizontal: 0, alignItems: 'center'}}>
        <TextFiled style={{fontSize: 20}}>Correct</TextFiled>
        <TouchableOpacity style={styles.shadowBox}>
          <Image style={[styles.image]} source={{uri: right.flag}} />
        </TouchableOpacity>
        <TextFiled style={{}}>{right.name}</TextFiled>
      </View>
      {picked.name !== right.name ? (
        <View style={{marginHorizontal: 0, alignItems: 'center'}}>
          <TextFiled style={{fontSize: 20}}>You Picked</TextFiled>
          <TouchableOpacity style={styles.shadowBox}>
            <Image style={styles.image} source={{uri: picked.flag}} />
          </TouchableOpacity>
          <TextFiled style={{}}>{picked.name}</TextFiled>
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
    width: 100,
    aspectRatio: 9 / 5,
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
