import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

export function BuyButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>Buy This</Text>
      </TouchableOpacity>
    </View>
  );
}
