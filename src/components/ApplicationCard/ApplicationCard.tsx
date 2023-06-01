import React from 'react';
import {ApplicationCardProps} from './types';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../theme/colors';

function ApplicationCard({
  photo,
  name,
  type,
  author,
  phone,
  email,
  year,
  downloads,
  social,
  platform,
  isFullCard,
  onClick,
}: ApplicationCardProps) {
  const inner = (
    <React.Fragment>
      <Image source={{uri: photo}} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.param}>
          <Text style={styles.paramTitle}>Name</Text>
          <Text style={styles.paramValue}>{name}</Text>
        </View>

        {isFullCard && (
          <React.Fragment>
            {type && (
              <View style={styles.param}>
                <Text style={styles.paramTitle}>Type</Text>
                <Text style={styles.paramValue}>{type}</Text>
              </View>
            )}

            {author && (
              <View style={styles.param}>
                <Text style={styles.paramTitle}>Author</Text>
                <Text style={styles.paramValue}>{author}</Text>
              </View>
            )}

            {platform && (
              <View style={styles.param}>
                <Text style={styles.paramTitle}>Platform</Text>
                <Text style={styles.paramValue}>{platform}</Text>
              </View>
            )}

            {year && (
              <View style={styles.param}>
                <Text style={styles.paramTitle}>Year of issue</Text>
                <Text style={styles.paramValue}>{year}</Text>
              </View>
            )}

            {downloads && (
              <View style={styles.param}>
                <Text style={styles.paramTitle}>Number of downloads</Text>
                <Text style={styles.paramValue}>{downloads}</Text>
              </View>
            )}

            {email && (
              <View style={styles.param}>
                <Text style={styles.paramTitle}>Email</Text>
                <Text
                  style={[styles.paramValue, styles.paramValueLink]}
                  onPress={() => Linking.openURL(`mailto: ${email}`)}>
                  {email}
                </Text>
              </View>
            )}

            {phone && (
              <View style={styles.param}>
                <Text style={styles.paramTitle}>Phone</Text>
                <Text
                  style={[styles.paramValue, styles.paramValueLink]}
                  onPress={() => Linking.openURL(`tel: ${phone}`)}>
                  {phone}
                </Text>
              </View>
            )}

            {social && (
              <View style={styles.param}>
                <Text style={styles.paramTitle}>Social link</Text>
                <Text
                  style={[styles.paramValue, styles.paramValueLink]}
                  onPress={() => Linking.openURL(social)}>
                  {social}
                </Text>
              </View>
            )}
          </React.Fragment>
        )}
      </View>
    </React.Fragment>
  );

  return !onClick ? (
    <View style={styles.component}>{inner}</View>
  ) : (
    <TouchableOpacity onPress={onClick}>{inner}</TouchableOpacity>
  );
}

export default ApplicationCard;

const styles = StyleSheet.create({
  component: {
    display: 'flex',
  },

  image: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
  },

  content: {
    display: 'flex',
  },

  param: {
    marginTop: 5,
  },

  paramTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: colors.gray,
  },

  paramValue: {
    fontSize: 16,
    lineHeight: 19,
    marginTop: 5,
  },

  paramValueLink: {
    color: colors.violet,
  },
});
