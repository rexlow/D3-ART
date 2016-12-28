import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ART,
  LayoutAnimation,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-array';

import Theme from '../theme';

const {
  Surface,
  Group,
  Rectangle,
  Shape,
} = ART;

export default class Pie extends Component {
  render() {
    return(
      <View>
        <Text>A Pie</Text>
      </View>
    )
  }
}
