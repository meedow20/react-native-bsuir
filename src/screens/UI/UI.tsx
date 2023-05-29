import React from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import {colors} from '../../theme/colors';

function UI() {
  return (
    <SafeAreaView style={styles.component}>
      <View style={styles.container}>
        <Text>UI</Text>
      </View>
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
});
