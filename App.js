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
    backgroundColor: '#000',
    justifyContent: 'flex-end',
  },
  value: {
    color: '#fff',
    fontSize: 60,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 20,
  },
});

const initialState = {
  currentValue: '0',
  operator: null,
  previousValue: null,
};

export default class App extends React.Component {
  state = initialState;

  // type we contain whether its number or operators
  handleTap = (type, value) => {
    this.setState(state => {
      if (type === 'number') {
        if (state.currentValue === '0') {
          return {currentValue: `${value}`};
        }
        return {
          currentValue: `${state.currentValue}${value}`,
        };
      }
      if (type === 'AC') {
        return initialState;
      }
      if (type === 'posneg') {
        return {
          currentValue: `${parseFloat(state.currentValue) * -1}`,
        };
      }
      if (type === 'percentage') {
        return {
          currentValue: `${parseFloat(state.currentValue) * 0.01}`,
        };
      }
      if (type === 'operator') {
        return {
          operator: value,
          previousValue: state.currentValue,
          currentValue: '0',
        };
      }
      if (type === 'equal') {
        const {currentValue, previousValue, operator} = state;
        const current = parseFloat(currentValue);
        const previous = parseFloat(previousValue);
        const resetState = {
          operator: null,
          previousValue: null,
        };
        if (operator === '/') {
          return {
            currentValue: previous / current,
            ...resetState,
          };
        }
        if (operator === '*') {
          return {
            currentValue: current * previous,
            ...resetState,
          };
        }
        if (operator === '+') {
          return {
            currentValue: current + previous,
            ...resetState,
          };
        }
        if (operator === '-') {
          return {
            currentValue: previous - current,
            ...resetState,
          };
        }
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Text>
          <Row>
            <Button
              text="AC"
              size="lightgrey"
              onPress={() => this.handleTap('AC', 'AC')}></Button>
            <Button
              text="+/-"
              size="lightgrey"
              onPress={() => this.handleTap('posneg', '')}></Button>
            <Button
              text="%"
              size="lightgrey"
              onPress={() => this.handleTap('percentage', '%')}></Button>
            <Button
              text="/"
              size="orange"
              onPress={() => this.handleTap('operator', '/')}></Button>
          </Row>
          <Row>
            <Button
              text="7"
              onPress={() => this.handleTap('number', 7)}></Button>
            <Button
              text="8"
              onPress={() => this.handleTap('number', 8)}></Button>
            <Button
              text="9"
              onPress={() => this.handleTap('number', 9)}></Button>
            <Button
              text="x"
              size="orange"
              onPress={() => this.handleTap('operator', '*')}></Button>
          </Row>
          <Row>
            <Button
              text="4"
              onPress={() => this.handleTap('number', 4)}></Button>
            <Button
              text="5"
              onPress={() => this.handleTap('number', 5)}></Button>
            <Button
              text="6"
              onPress={() => this.handleTap('number', 6)}></Button>
            <Button
              text="-"
              size="orange"
              onPress={() => this.handleTap('operator', '-')}></Button>
          </Row>
          <Row>
            <Button
              text="1"
              onPress={() => this.handleTap('number', 1)}></Button>
            <Button
              text="2"
              onPress={() => this.handleTap('number', 2)}></Button>
            <Button
              text="3"
              onPress={() => this.handleTap('number', 3)}></Button>
            <Button
              text="+"
              size="orange"
              onPress={() => this.handleTap('operator', '+')}></Button>
          </Row>
          <Row>
            <Button
              text="0"
              size="double"
              onPress={() => this.handleTap('number', 0)}></Button>
            <Button
              text="."
              onPress={() => this.handleTap('number', '.')}></Button>
            <Button
              text="="
              size="orange"
              onPress={() => this.handleTap('equal', '=')}></Button>
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
