import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, SafeAreaView, View, FlatList} from 'react-native';
import {colors} from '../../theme/colors';
import {ActivityValues} from '../Activity/types';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import ActivityCard from '../../components/ActivityCard';
import {useTypedNavigation} from '../../hooks/useTypedNavigation';

function ActivityList() {
  const [activityValues, setActivityValues] = useState<ActivityValues[]>([]);
  const {getItem} = useAsyncStorage('activity_values');
  const navigation = useTypedNavigation();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const values = await getItem();

          if (values) {
            setActivityValues(JSON.parse(values));
          }
        } catch (error) {
          console.log(error);
        }
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  const handleCardClick = (activity: ActivityValues) => {
    navigation.navigate('ActivityList', {
      screen: 'DetailedActivity',
      params: {
        photo: activity.photo,
        name: activity.name,
        type: activity.type,
        author: activity.author,
        year: activity.year,
        platform: activity.platform,
        downloads: activity.downloads,
        email: activity.email,
        phone: activity.phone,
        social: activity.social,
      },
    });
  };

  return (
    <SafeAreaView style={styles.component}>
      <View style={styles.container}>
        {activityValues && activityValues.length > 0 ? (
          <FlatList<ActivityValues>
            data={activityValues}
            renderItem={({item, index}) => (
              <View key={index} style={styles.activityCard}>
                <ActivityCard
                  photo={item.photo}
                  name={item.name}
                  onClick={() => handleCardClick(item)}
                />
              </View>
            )}
          />
        ) : (
          <Text>No activities</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

export default ActivityList;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: colors.white,
  },

  container: {
    flex: 1,
    margin: 20,
  },

  activityCard: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: colors.gray,
  },
});
