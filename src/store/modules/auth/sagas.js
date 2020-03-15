import { Alert } from 'react-native';

import { takeLatest, all, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.get, 'deliveryman', {
      params: { id },
    });

    if (!response.data) {
      Alert.alert(
        'Erro no login',
        'Nenhum entregador encontrado com o ID fornecido'
      );
      return;
    }
    yield put(signInSuccess(response.data));
  } catch (err) {
    console.tron.log(err);
    Alert.alert('Erro no login', 'Verifique o seu ID');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
