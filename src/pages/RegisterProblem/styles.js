import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const TopBox = styled.View`
  width: 100%;
  height: 170px;
  background-color: #7d40e7;
  align-items: center;
`;

export const InputBox = styled.TextInput`
  height: 300px;
  width: 85%;
  border: 1px solid #0000001a;
  background-color: #ffffff;
  margin-top: 120px;
  border-radius: 4px;
  padding: 15px;
`;

export const SubmitButton = styled(RectButton)`
  margin-top: 10px;
  width: 85%;
  height: 45px;
  background-color: #7d40e7;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  color: #ffffff;
  font-size: 16px;
`;
