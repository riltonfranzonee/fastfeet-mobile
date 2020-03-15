import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { Container, Logo, FormInput, FormButton, ButtonText } from './styles';

import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const [input, setInput] = useState();

  function handleSubmit() {
    dispatch(signInRequest(input));
  }

  return (
    <Container>
      <Logo source={logo} />
      <FormInput
        placeholder="Informe seu ID de cadastro"
        placeholderTextColor="#999999"
        onChangeText={setInput}
        value={input}
      />
      <FormButton onPress={() => handleSubmit()}>
        <ButtonText>Entrar no sistema</ButtonText>
      </FormButton>
    </Container>
  );
}
