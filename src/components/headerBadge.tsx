import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import TextFiled from '../assets/common/Text';
import {palette1} from '../colors';

type HeaderBadgeProps = PropsWithChildren<{
  title?: string | number;
  value?: string | number;
  style?: {};
}>;

const HeaderBadge = ({title, value, style}: HeaderBadgeProps) => {
  return (
    <View style={[styles.badge, styles.shadowBox, style]}>
      {title !== undefined ? (
        <TextFiled style={styles.text}>{title}</TextFiled>
      ) : null}
      {value !== undefined ? (
        <TextFiled style={styles.text}>{value}</TextFiled>
      ) : null}
    </View>
  );
};

export default HeaderBadge;

const styles = StyleSheet.create({
  text: {
    color: palette1.logo,
    fontSize: 13,
  },
  badge: {
    backgroundColor: palette1.background,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: palette1.color4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
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
