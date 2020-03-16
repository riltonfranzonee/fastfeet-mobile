import React from 'react';
import { utcToZonedTime, format } from 'date-fns-tz';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  UserInfo,
  UserImage,
  UserField,
  Title,
  UserData,
  LogoutButton,
  ButtonText,
} from './styles';

const pattern = 'dd/MM/yyyy';
const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

export default function Profile() {
  const user = useSelector(state => state.auth.user);

  const zonedDate = utcToZonedTime(user.created_at, timeZone);
  const formattedDate = format(zonedDate, pattern);

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }
  return (
    <Container>
      <UserInfo>
        <UserImage
          source={{
            uri:
              (user.avatar && user.avatar.url) ||
              `https://ui-avatars.com/api/?size=140&background=f4effc&color=a28fd0&name=${user.name.replace(
                /\s/g,
                '+'
              )}`,
          }}
        />
        <UserField>
          <Title>Nome Completo</Title>
          <UserData>{user.name}</UserData>
        </UserField>
        <UserField>
          <Title>Email</Title>
          <UserData>{user.email}</UserData>
        </UserField>
        <UserField>
          <Title>Data de cadastro</Title>
          <UserData>{formattedDate}</UserData>
        </UserField>
        <LogoutButton onPress={handleLogout}>
          <ButtonText>Logout</ButtonText>
        </LogoutButton>
      </UserInfo>
    </Container>
  );
}
