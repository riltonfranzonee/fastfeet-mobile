import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

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

export const PictureButton = styled.TouchableOpacity`
  margin-top: -80px;
  width: 61px;
  height: 61px;
  border-radius: 30.5px;
  align-self: center;
  background-color: #0000004d;
  justify-content: center;
  align-items: center;
`;

export const SendButton = styled(RectButton)`
  width: 90%;
  height: 45px;
  margin-top: 30px;
  align-self: center;
  background-color: #7d40e7;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
`;

export const Camera = styled(RNCamera)`
  margin-top: -50px;
  width: 90%;
  height: 75%;
  align-self: center;
  border-radius: 4px;
`;
