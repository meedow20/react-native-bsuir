import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {colors} from '../../theme/colors';

import {useTypedRoute} from '../../hooks/useTypedRoute';
import ApplicationCard from '../../components/ApplicationCard';

function DetailedApplication() {
  const {params} = useTypedRoute('DetailedApplication');

  return (
    <SafeAreaView style={styles.component}>
      <ScrollView style={styles.container}>
        {params ? (
          <ApplicationCard
            photo={params.photo}
            name={params.name}
            type={params.type}
            author={params.author}
            platform={params.platform}
            year={params.year}
            downloads={params.downloads}
            email={params.email}
            phone={params.phone}
            social={params.social}
            isFullCard
          />
        ) : (
          <Text>No params</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailedApplication;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: colors.white,
  },

  container: {
    flex: 1,
    margin: 20,
  },
});
