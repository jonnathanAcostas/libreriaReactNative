import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Lista from './components/Lista';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

export default function App() {
  return (
    <View style={styles.container}>
      <Lista />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
