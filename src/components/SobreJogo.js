import React from 'react';
import { Text } from 'react-native';

export default class SobreJogo extends React.Component {
  render() {
    return (
      <Text style={{flex: 1, backgroundColor: '#61bd8c' }}>
        Aqui podem ser apresentadas informações sobre o jogo.
      </Text>
    )
  }
}