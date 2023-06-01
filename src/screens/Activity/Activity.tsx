import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {colors} from '../../theme/colors';
import {Button, TextInput} from 'react-native-paper';
import {ActivityValues, StepType} from './types';
import {getInitialActivityValues} from './helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useTypedNavigation} from '../../hooks/useTypedNavigation';
import uuid from 'react-native-uuid';

function Activity() {
  const [currentStep, setCurrentStep] = useState<StepType>('first');
  const [values, setValues] = useState<ActivityValues>(
    getInitialActivityValues(),
  );
  const {getItem, setItem} = useAsyncStorage('activity_values');
  const navigation = useTypedNavigation();

  const isButtonDisabled =
    currentStep === 'first'
      ? !values.name ||
        !values.type ||
        !values.author ||
        !values.year ||
        !values.platform
      : !values.downloads ||
        !values.email ||
        !values.phone ||
        !values.photo ||
        !values.social;

  const handleBackButton = () => {
    setCurrentStep('first');
  };

  const handleSubmitButton = async () => {
    if (currentStep === 'first') {
      setCurrentStep('second');
    } else {
      try {
        const id = uuid.v4();
        const activityValues = await getItem();
        const resultValues = {...values, id};

        if (activityValues !== null) {
          await setItem(
            JSON.stringify([...JSON.parse(activityValues), resultValues]),
          );
        } else {
          await setItem(JSON.stringify([resultValues]));
        }

        setValues(getInitialActivityValues());
        setCurrentStep('first');
        navigation.navigate('ActivityList', {screen: 'ActivityListMain'});
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.component}>
      <View style={styles.container}>
        <ScrollView>
          {currentStep === 'second' && (
            <TouchableOpacity
              style={styles.buttonBack}
              onPress={handleBackButton}>
              <Icon name="arrow-back" size={20} />
              <Text style={styles.buttonBackText}>Назад</Text>
            </TouchableOpacity>
          )}

          {currentStep === 'first' && (
            <React.Fragment>
              <View style={styles.field}>
                <TextInput
                  mode="outlined"
                  label="Название"
                  value={values.name}
                  onChangeText={value => setValues({...values, name: value})}
                />
              </View>

              <View style={styles.field}>
                <TextInput
                  mode="outlined"
                  label="Тип"
                  value={values.type}
                  onChangeText={value => setValues({...values, type: value})}
                />
              </View>

              <View style={styles.field}>
                <TextInput
                  mode="outlined"
                  label="Автор"
                  value={values.author}
                  onChangeText={value => setValues({...values, author: value})}
                />
              </View>

              <View style={styles.field}>
                <TextInput
                  mode="outlined"
                  label="Год выпуска"
                  value={values.year}
                  onChangeText={value => setValues({...values, year: value})}
                />
              </View>

              <View style={styles.field}>
                <TextInput
                  mode="outlined"
                  label="Платформа"
                  value={values.platform}
                  onChangeText={value =>
                    setValues({...values, platform: value})
                  }
                />
              </View>
            </React.Fragment>
          )}

          {currentStep === 'second' && (
            <React.Fragment>
              <View style={styles.field}>
                <TextInput
                  mode="outlined"
                  label="Количество скачиваний"
                  value={values.downloads}
                  onChangeText={value =>
                    setValues({...values, downloads: value})
                  }
                />
              </View>

              <View style={styles.field}>
                <TextInput
                  mode="outlined"
                  label="Email"
                  value={values.email}
                  onChangeText={value => setValues({...values, email: value})}
                />
              </View>

              <View style={styles.field}>
                <TextInput
                  mode="outlined"
                  label="Телефон"
                  value={values.phone}
                  onChangeText={value => setValues({...values, phone: value})}
                />
              </View>

              <View style={styles.field}>
                <TextInput
                  mode="outlined"
                  label="Ссылка на фото"
                  value={values.photo}
                  onChangeText={value => setValues({...values, photo: value})}
                />
              </View>

              <View style={styles.field}>
                <TextInput
                  mode="outlined"
                  label="Ссылка на соц. сеть"
                  value={values.social}
                  onChangeText={value => setValues({...values, social: value})}
                />
              </View>
            </React.Fragment>
          )}

          <Button
            style={styles.button}
            mode="contained"
            onPress={handleSubmitButton}
            disabled={isButtonDisabled}>
            {currentStep === 'first' ? 'Далее' : 'Сохранить'}
          </Button>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Activity;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: colors.white,
  },

  container: {
    flex: 1,
    margin: 20,
  },

  buttonBack: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },

  buttonBackText: {
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 5,
  },

  field: {
    marginBottom: 20,
  },

  button: {
    marginTop: 20,
  },
});
