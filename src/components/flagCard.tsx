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
        <Image
          style={styles.image}
          source={{uri: country.flag}}
          fadeDuration={0}
        />
      </View>
      <TextFiled style={{}}>{country.name}</TextFiled>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: Dimensions.get('screen').width / 3.5,
    alignItems: 'center',
    margin: 5,
    marginBottom: 20,
    padding: 5,
    // justifyContent: 'space-between',
  },
  imageContainer: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 6,
    borderRadius: 10,
  },
  image: {
    borderWidth: 1,
    borderRadius: 10,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 6,
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
