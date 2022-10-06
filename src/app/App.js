import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Card from './card';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Card title='Arif Işık' text='Uzaylılar tarafından kaçırıldım. Evet tarafından.'/>
      <Card title='Eddard Stark' text='Winter is coming..'/>
      <Card title='Emre Bulak' text='Haddi bakemm'/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ecf0f1'
  }
});

export default App;
