import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

type HeaderBadgeProps = PropsWithChildren<{
  title: string;
  value: string;
}>;

const HeaderBadge = ({title, value}: HeaderBadgeProps) => {
  return (
    <View style={[styles.badge, styles.shadowBox]}>
      <Text style={styles.text}>{title} : </Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

export default HeaderBadge;

const styles = StyleSheet.create({
  text: {
    color: '#043fa7',
    // padding: 10,
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
