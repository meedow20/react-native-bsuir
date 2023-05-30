import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View, Text} from 'react-native';
import {Button, SegmentedButtons, TextInput} from 'react-native-paper';
import {colors} from '../../theme/colors';
import {tabs} from './constants';

function UI() {
  const [tabsValue, setTabsValue] = React.useState(tabs[0].value);

  return (
    <SafeAreaView style={styles.component}>
      <ScrollView style={styles.container}>
        <View style={styles.field}>
          <TextInput mode="outlined" label="Сумма кредита, BYN" />
        </View>

        <View style={styles.field}>
          <TextInput mode="outlined" label="Срок кредита, лет" />
        </View>

        <View style={styles.field}>
          <TextInput mode="outlined" label="Ставка, %" />
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Вид платежа</Text>
          <SegmentedButtons
            value={tabsValue}
            onValueChange={setTabsValue}
            buttons={tabs}
          />
        </View>

        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Рассчитать
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UI;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: colors.white,
  },

  container: {
    flex: 1,
    padding: 20,
  },

  field: {
    marginBottom: 20,
  },

  fieldTitle: {
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 10,
  },

  button: {
    marginVertical: 20,
  },
});
