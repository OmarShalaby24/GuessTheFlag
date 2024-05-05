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
import Icon from 'react-native-vector-icons/FontAwesome';
import {CountryClass} from '../types';
import {palette1} from '../colors';

type Props = {
  right: CountryClass;
  picked: CountryClass;
};

const ResultCard: React.FC<Props> = ({picked, right}: Props) => {
  const [fontColor, setFontColor] = useState(palette1.background);
  useEffect(() => {
    setFontColor(picked.name !== right.name ? palette1.red : palette1.green);
  });
  return (
    <View
      style={[styles.container, styles.shadowBox, {borderColor: fontColor}]}
      key="card">
      <View
        style={[styles.symbol, styles.shadowBox, {backgroundColor: fontColor}]}>
        <TextFiled>
          {picked.name === right.name ? (
            <Icon name="check" />
          ) : (
            <Icon name="close" />
          )}
        </TextFiled>
      </View>
      <View style={{flex: 1}}>
        <View style={styles.result}>
          <View
            style={{
              marginHorizontal: 0,
              alignItems: 'center',
            }}>
            {/* <Icon name="check" color={palette1.green} /> */}
            <TouchableOpacity disabled style={styles.shadowBox}>
              <Image
                style={[
                  styles.image,
                  {borderColor: palette1.green, borderWidth: 2},
                ]}
                source={{uri: right.flag}}
              />
            </TouchableOpacity>
            <View style={styles.countryName}>
              <TextFiled style={{color: palette1.green}}>
                {right.name}
              </TextFiled>
            </View>
          </View>
          {picked.name !== right.name ? (
            <View
              style={{
                marginHorizontal: 0,
                alignItems: 'center',
              }}>
              <TouchableOpacity disabled style={styles.shadowBox}>
                <Image
                  style={[
                    styles.image,
                    {borderColor: palette1.red, borderWidth: 2},
                  ]}
                  source={{uri: picked.flag}}
                />
              </TouchableOpacity>
              <View style={styles.countryName}>
                <TextFiled style={{color: palette1.red}}>
                  {picked.name}
                </TextFiled>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default ResultCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    // marginHorizontal: 30,
    backgroundColor: palette1.background_light,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 2,
    height: Dimensions.get('screen').height / 6,
    width: (Dimensions.get('screen').width * 14) / 15,
  },
  image: {
    borderWidth: 1,
    borderColor: palette1.background,
    borderRadius: 5,
    width: Dimensions.get('screen').width / 4,
    aspectRatio: 9 / 5,
  },
  countryName: {
    textAlign: 'center',
    width: 150,
    // height:
  },
  symbol: {
    // backgroundColor: '#adf',
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  result: {
    flexDirection: 'row',
    justifyContent: 'center',
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
