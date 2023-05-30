import React from 'react';
import {NewsCardProps} from './types';
import {Linking, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../../theme/colors';

function NewsCard({date, title, url}: NewsCardProps) {
  return (
    <View style={styles.component}>
      <Text style={[styles.text, styles.date]}>{date}</Text>
      <Text style={[styles.text]}>{title}</Text>
      <Text
        style={[styles.text, styles.url]}
        onPress={() => Linking.openURL(url)}>
        {url}
      </Text>
    </View>
  );
}

export default NewsCard;

const styles = StyleSheet.create({
  component: {
    display: 'flex',
  },

  text: {
    fontSize: 16,
    lineHeight: 19,
  },

  date: {
    fontWeight: '700',
  },

  url: {
    color: colors.violet,
  },
});
