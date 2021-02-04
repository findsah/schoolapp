import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    num1: "",
    num2: "",
    result: ""
  }

  addBtnPressed = () => {
    this.setState({
      if(num1 == "" || num2 == "")
    {
      alert('Field Empty')
    }
      else {
      result: eval(this.state.num1 + "+" + this.state.num2)
    }
  });
}

render() {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType={"numeric"}
        placeholder="Enter 1st Number"
        onChangeText={num1 => this.setState({ num1 })} />

      <TextInput
        keyboardType={"numeric"}
        placeholder="Enter 2nd Number"
        onChangeText={num2 => this.setState({ num2 })} />
      <Button title="ADD" onPress={this.addBtnPressed} />
      <Text>{this.state.result}</Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});