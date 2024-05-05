import React, {memo, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {CountryClass} from '../types';
import TextFiled from '../assets/common/Text';
import {palette1} from '../colors';

type flagCardProps = {
  country: CountryClass;
};

const FlagCard: React.FC<flagCardProps> = memo(({country}: flagCardProps) => {
  const [cardStyle, setCardStyle] = useState<{}>({
    ...styles.container,
    ...styles.shadowBox,
  });
  return (
    <TouchableOpacity
      disabled
      style={cardStyle}
      onPress={() => console.log(country.name)}>
      <View style={[styles.imageContainer, styles.shadowBox]}>
        <Image style={styles.image} source={{uri: country.flag}} />
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TextFiled style={{color: palette1.background}}>
          {country.name}
        </TextFiled>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette1.text,
    borderRadius: 10,
    width: Dimensions.get('screen').width / 3.5,
    height: Dimensions.get('screen').height / 5.5,
    alignItems: 'center',
    margin: 5,
    marginBottom: 20,
    padding: 5,
    // justifyContent: 'space-evenly',
  },
  imageContainer: {
    width: Dimensions.get('window').width / 4,
    aspectRatio: 13 / 8,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
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

export default memo(FlagCard);
