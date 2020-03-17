import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function Details({ route }) {
  const { delivery } = route.params;
  return (
    <View>
      <Text>{delivery.product}</Text>
    </View>
  );
}

Details.propTypes = {
  route: PropTypes.object.isRequired,
};
