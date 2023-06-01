import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Alert,
} from 'react-native';
import {Button, SegmentedButtons, TextInput} from 'react-native-paper';
import {colors} from '../../theme/colors';
import {tabs} from './constants';
import {InputsValuesType} from './types';
import {getInitialInputsValues} from './helpers';

function CreditCalculator() {
  const [tabsValue, setTabsValue] = React.useState(tabs[0].value);
  const [inputValues, setInputValues] = useState<InputsValuesType>(
    getInitialInputsValues(),
  );

  const isButtonDisabled =
    !inputValues.sum || !inputValues.bid || !inputValues.term;

  const handlePressButton = () => {
    const sum = Number(inputValues.sum);
    const month = 12 * Number(inputValues.term);
    const bid = Number(inputValues.bid) / 12 / 100;

    if (tabsValue === tabs[0].value) {
      const paymentsMonthValue = sum / month;
      let payments = [];

      for (let i = 1; i <= month; i++) {
        payments.push(
          Math.round(
            paymentsMonthValue + (sum - paymentsMonthValue * (i - 1)) * bid,
          ),
        );
      }

      Alert.alert('Amount of payment', `${payments.join(',')}`);
    } else {
      const koef =
        (bid * Math.pow(1 + bid, month)) / (Math.pow(1 + bid, month) - 1);

      Alert.alert('Amount of payment', `${Math.round(sum * koef)}`);
    }
  };

  return (
    <SafeAreaView style={styles.component}>
      <ScrollView style={styles.container}>
        <View style={styles.field}>
          <TextInput
            mode="outlined"
            label="Amount of credit, BYN"
            value={inputValues.sum}
            onChangeText={value => setInputValues({...inputValues, sum: value})}
          />
        </View>

        <View style={styles.field}>
          <TextInput
            mode="outlined"
            label="Credit term, years"
            value={inputValues.term}
            onChangeText={value =>
              setInputValues({...inputValues, term: value})
            }
          />
        </View>

        <View style={styles.field}>
          <TextInput
            mode="outlined"
            label="Annual rate, %"
            value={inputValues.bid}
            onChangeText={value => setInputValues({...inputValues, bid: value})}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Payment type</Text>
          <SegmentedButtons
            value={tabsValue}
            onValueChange={setTabsValue}
            buttons={tabs}
          />
        </View>

        <Button
          style={styles.button}
          mode="contained"
          onPress={handlePressButton}
          disabled={isButtonDisabled}>
          Calculate
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CreditCalculator;

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
