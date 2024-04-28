import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import TextFiled from '../assets/common/Text';

type HeaderBadgeProps = PropsWithChildren<{
  title: string | number;
  value: string | number;
}>;

const HeaderBadge = ({title, value}: HeaderBadgeProps) => {
  return (
    <View style={[styles.badge, styles.shadowBox]}>
      <TextFiled style={styles.text}>{title} : </TextFiled>
      <TextFiled style={styles.text}>{value}</TextFiled>
    </View>
  );
};

export default HeaderBadge;

const styles = StyleSheet.create({
  text: {
    color: '#043fa7',
    fontSize: 13,
  },
  badge: {
    backgroundColor: '#e7f9f9',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e7f9f9',
    paddingVertical: 5,
    paddingHorizontal: 10,
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
