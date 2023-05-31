import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import {colors} from '../../theme/colors';
import {ActivityValues} from '../Activity/types';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

function ActivityList() {
  const [activityValues, setActivityValues] = useState<ActivityValues[]>([]);
  const {getItem} = useAsyncStorage('activity_values');

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

  return (
    <SafeAreaView style={styles.component}>
      <View style={styles.container}>
        <Text>ActivityList</Text>
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
    padding: 20,
  },
});
