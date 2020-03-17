import React, { useState } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';

import {
  Container,
  TopBox,
  InputBox,
  SubmitButton,
  TextButton,
} from './styles';

import api from '~/services/api';

export default function RegisterProblem({ route }) {
  const { id } = route.params;
  const navigation = useNavigation();

  const [problem, setProblem] = useState('');

  async function handleSubmit() {
    try {
      const response = await api.post(`delivery/${id}/problems`, {
        description: problem,
      });

      if (!response.data) {
        Alert.alert('Houve um erro', 'Não foi possível registrar o problema');
        return;
      }

      Alert.alert('Problema registrado com sucesso');
      navigation.dispatch(CommonActions.goBack());
    } catch (err) {
      Alert.alert('Houve um erro', 'Não foi possível registrar o problema');
    }
  }

  return (
    <Container>
      <TopBox>
        <InputBox
          placeholder={'Inclua aqui o problema que ocorreu na \nentrega.'}
          placeholderTextColor="#999999"
          multiline={true}
          style={{ fontSize: 16 }}
          onChangeText={text => setProblem(text)}
        />
        <SubmitButton onPress={handleSubmit}>
          <TextButton>Enviar</TextButton>
        </SubmitButton>
      </TopBox>
    </Container>
  );
}

RegisterProblem.propTypes = {
  route: PropTypes.object.isRequired,
};
