import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Text } from 'react-native';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Header,
  User,
  UserImage,
  UserInfo,
  Greeting,
  UserName,
  LogoutButton,
  TopRow,
  Title,
  OptionsWrapper,
  Option,
  DeliveriesList,
  CardContainer,
  CardHeader,
  CardHeaderText,
} from './styles';

import api from '~/services/api';

function Card({ delivery }) {
  return (
    <CardContainer>
      <CardHeader>
        <Icon name="truck" color="#7D40E7" size={27} />
        <CardHeaderText>{`Encomenda ${delivery.id}`}</CardHeaderText>
      </CardHeader>
    </CardContainer>
  );
}

export default function Dashboard() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const [deliveries, setDeliveries] = useState([]);

  function handleLogout() {
    dispatch(signOut());
  }

  async function loadData(delivered = 'not') {
    const response = await api.get(
      `deliveryman/${user.id}/deliveries?delivered=${delivered}`
    );
    setDeliveries(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header>
        <User>
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
          <UserInfo>
            <Greeting>Bem vindo de volta,</Greeting>
            <UserName>{user.name}</UserName>
          </UserInfo>
        </User>
        <LogoutButton onPress={handleLogout}>
          <Icon name="logout" size={30} color="#E74040" />
        </LogoutButton>
      </Header>
      <TopRow>
        <Title>Entregas</Title>
        <OptionsWrapper>
          <Option selected>Pendentes</Option>
          <Option>Entregues</Option>
        </OptionsWrapper>
      </TopRow>
      <DeliveriesList
        data={deliveries}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Card delivery={item} />}
      />
    </Container>
  );
}
