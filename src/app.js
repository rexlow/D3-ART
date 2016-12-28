import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import Pie from './charts/Pie';

import data from './data/data';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      spendingsPerYear: data.spendingsPerYear
    }
  }

  render() {
    const { container, chartTitle } = styles
    return (
      <View style={container}>
        <Text style={chartTitle}>Distribution of spending this month</Text>
      </View>
    );
  }
}


const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
}
