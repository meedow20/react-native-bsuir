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
import {ApplicationCreateValues, StepType} from './types';
import {getInitialApplicationValues} from './helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useTypedNavigation} from '../../hooks/useTypedNavigation';
import uuid from 'react-native-uuid';
import {launchImageLibrary} from 'react-native-image-picker';

function ApplicationCreate() {
  const [currentStep, setCurrentStep] = useState<StepType>('first');
  const [values, setValues] = useState<ApplicationCreateValues>(
    getInitialApplicationValues(),
  );
  const {getItem, setItem} = useAsyncStorage('application_values');
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

  const handleOpenImage = async () => {
    try {
      await launchImageLibrary({mediaType: 'photo'}, response => {
        if (response.errorCode) {
          console.log(response.errorCode);
        } else {
          if (response.assets && response.assets[0].uri) {
            setValues({...values, photo: response.assets[0].uri});
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
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

        setValues(getInitialApplicationValues());
        setCurrentStep('first');
        navigation.navigate('ApplicationList', {screen: 'ApplicationListMain'});
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
              <Text style={styles.buttonBackText}>Back</Text>
            </TouchableOpacity>
          )}

          {currentStep === 'first' && (
            <React.Fragment>
              <View style={styles.field}>
                <TextInput
                  mode="outlined"
                  label="Name"
                  value={values.name}
                  onChangeText={value => setValues({...values, name: value})}
                />
              </View>

              <View style={styles.field}>
                <TextInput
                  mode="outlined"
                  label="Type"
                  value={values.type}
                  onChangeText={value => setValues({...values, type: value})}
                />
              </View>

              <View style={styles.field}>
                <TextInput
                  mode="outlined"
                  label="Author"
                  value={values.author}
                  onChangeText={value => setValues({...values, author: value})}
                />
              </View>

              <View style={styles.field}>
                <TextInput
                  mode="outlined"
                  label="Year of issue"
                  value={values.year}
                  onChangeText={value => setValues({...values, year: value})}
                />
              </View>

              <View style={styles.field}>
                <TextInput
                  mode="outlined"
                  label="Platform"
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
                  label="Number of downloads"
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
                  label="Phone"
                  value={values.phone}
                  onChangeText={value => setValues({...values, phone: value})}
                />
              </View>

              <View style={styles.field}>
                <TextInput
                  mode="outlined"
                  label="Photo"
                  value={values.photo}
                  onPressIn={handleOpenImage}
                />
              </View>

              <View style={styles.field}>
                <TextInput
                  mode="outlined"
                  label="Social link"
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
            {currentStep === 'first' ? 'Next' : 'Save'}
          </Button>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default ApplicationCreate;

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
