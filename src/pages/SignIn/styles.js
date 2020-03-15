import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #7d40e7;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 260px;
  height: 50px;
  margin-bottom: 30px;
`;

export const FormInput = styled.TextInput`
  width: 325px;
  height: 45px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 0 20px;
  border: 1px solid #dddddd;
  margin-bottom: 18px;
`;

export const FormButton = styled(RectButton)`
  width: 325px;
  height: 45px;
  background-color: #82bf18;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #ffffff;
  font-size: 16px;
`;
