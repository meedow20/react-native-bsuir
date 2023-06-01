import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, SafeAreaView, View, FlatList} from 'react-native';
import {colors} from '../../theme/colors';
import {ApplicationCreateValues} from '../ApplicationCreate/types';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import ApplicationCard from '../../components/ApplicationCard';
import {useTypedNavigation} from '../../hooks/useTypedNavigation';

function ApplicationList() {
  const [applicationCreateValues, setApplicationCreateValues] = useState<
    ApplicationCreateValues[]
  >([]);
  const {getItem} = useAsyncStorage('application_values');
  const navigation = useTypedNavigation();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const values = await getItem();

          if (values) {
            setApplicationCreateValues(JSON.parse(values));
          }
        } catch (error) {
          console.log(error);
        }
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  const handleCardClick = (application: ApplicationCreateValues) => {
    navigation.navigate('ApplicationList', {
      screen: 'DetailedApplication',
      params: {
        photo: application.photo,
        name: application.name,
        type: application.type,
        author: application.author,
        year: application.year,
        platform: application.platform,
        downloads: application.downloads,
        email: application.email,
        phone: application.phone,
        social: application.social,
      },
    });
  };

  return (
    <SafeAreaView style={styles.component}>
      <View style={styles.container}>
        {applicationCreateValues && applicationCreateValues.length > 0 ? (
          <FlatList<ApplicationCreateValues>
            data={applicationCreateValues}
            renderItem={({item, index}) => (
              <View key={index} style={styles.applicationCard}>
                <ApplicationCard
                  photo={item.photo}
                  name={item.name}
                  onClick={() => handleCardClick(item)}
                />
              </View>
            )}
          />
        ) : (
          <Text>No applications</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

export default ApplicationList;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: colors.white,
  },

  container: {
    flex: 1,
    margin: 20,
  },

  applicationCard: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: colors.gray,
  },
});
