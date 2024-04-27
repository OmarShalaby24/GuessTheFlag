import React, {Component} from 'react';
import TextFiled from '../assets/common/Text';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  picked: {Name: string; path: string};
  right: {Name: string; path: string};
};

const ResultCard: React.FC<Props> = ({picked, right}: Props) => {
  return (
    <View style={[styles.container, styles.shadowBox]}>
      <View style={{marginHorizontal: 0, alignItems: 'center'}}>
        <TextFiled style={{fontSize: 20}}>Correct</TextFiled>
        <TouchableOpacity style={styles.shadowBox}>
          <Image style={[styles.image]} source={{uri: right.path}} />
        </TouchableOpacity>
        <TextFiled style={{}}>{right.Name}</TextFiled>
      </View>
      {picked.Name !== right.Name ? (
        <View style={{marginHorizontal: 0, alignItems: 'center'}}>
          <TextFiled style={{fontSize: 20}}>You Picked</TextFiled>
          <TouchableOpacity style={styles.shadowBox}>
            <Image style={styles.image} source={{uri: picked.path}} />
          </TouchableOpacity>
          <TextFiled style={{}}>{picked.Name}</TextFiled>
        </View>
      ) : null}
    </View>
  );
};

export default ResultCard;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // width: '100%',
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
    // height: 30,
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
