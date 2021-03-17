/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, Dimensions, StyleSheet, Text, View} from 'react-native';
import Row from './components/Row';
import Button from './components/Button';

const screens = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    justifyContent: 'flex-end',
  },
  value: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'right',
    marginRight: 20,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.value}>75</Text>
          <Row>
            <Button text="AC" onPress={() => alert('todo1')}></Button>
            <Button text="+/-" onPress={() => alert('todo2')}></Button>
            <Button text="%" onPress={() => alert('todo3')}></Button>
            <Button text="/" onPress={() => alert('todo4')}></Button>
          </Row>
          <Row>
            <Button text="7" onPress={() => alert('todo1')}></Button>
            <Button text="8" onPress={() => alert('todo2')}></Button>
            <Button text="9" onPress={() => alert('todo3')}></Button>
            <Button text="X" onPress={() => alert('todo4')}></Button>
          </Row>
          <Row>
            <Button text="4" onPress={() => alert('todo1')}></Button>
            <Button text="5" onPress={() => alert('todo2')}></Button>
            <Button text="6" onPress={() => alert('todo3')}></Button>
            <Button text="-" onPress={() => alert('todo4')}></Button>
          </Row>
          <Row>
            <Button text="1" onPress={() => alert('todo1')}></Button>
            <Button text="2" onPress={() => alert('todo2')}></Button>
            <Button text="3" onPress={() => alert('todo3')}></Button>
            <Button text="*" onPress={() => alert('todo4')}></Button>
          </Row>
          <Row>
            <Button text="0" onPress={() => alert('todo1')}></Button>
            <Button text="." onPress={() => alert('todo2')}></Button>
            <Button text="=" onPress={() => alert('todo3')}></Button>
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
