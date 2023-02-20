/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={{color: 'red'}}>{'This is my First Android App'}</Text>
        <View>
          <Text>Orange Dictionary</Text>
          <Button title="aaa" onPress={() => Alert.alert('hello')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
