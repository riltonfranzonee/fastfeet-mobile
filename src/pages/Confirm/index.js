import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCamera } from 'react-native-camera-hooks';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  TopBox,
  PictureButton,
  SendButton,
  TextButton,
  Camera,
} from './styles';

import api from '~/services/api';

export default function Confirm({ initialProps, route }) {
  const navigation = useNavigation();
  const { id } = route.params;

  const [
    { cameraRef, type, ratio, autoFocus, autoFocusPoint },
    { takePicture },
  ] = useCamera(initialProps);

  const [takenPicture, setTakenPicture] = useState(null);

  async function handlePicture() {
    const data = await takePicture({ quality: 0.5 });
    setTakenPicture(data);
  }

  async function handleSubmit() {
    try {
      const data = new FormData();
      data.append('file', {
        uri: takenPicture.uri,
        name: 'deliverySignature.jpg',
        type: 'image/jpeg',
      });

      const response = await api.post('files', data);
      const signatureId = response.data.id;

      const datetime = new Date();
      const end_date = datetime.toISOString().replace('Z', '');

      await api.put(`deliver/${id}`, {
        signatureId,
        end_date,
      });

      Alert.alert('Entrega confirmada com sucesso');
      navigation.navigate('Dashboard');
    } catch (err) {
      console.tron.log(err);
      Alert.alert(
        'Não foi possível confirmar a entrega',
        'Houve um erro em nosso sistema'
      );
    }
  }
  return (
    <Container>
      <TopBox />
      <Camera
        ref={cameraRef}
        autoFocusPointOfInterest={autoFocusPoint.normalized}
        type={type}
        ratio={ratio}
        autoFocus={autoFocus}
      />
      <PictureButton onPress={handlePicture}>
        <Icon name="camera" size={29} color="#ffffff" />
      </PictureButton>
      <SendButton onPress={handleSubmit}>
        <TextButton>Enviar</TextButton>
      </SendButton>
    </Container>
  );
}

Confirm.propTypes = {
  initialProps: PropTypes.object,
  route: PropTypes.object.isRequired,
};
