import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { utcToZonedTime, format } from 'date-fns-tz';

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
  PendingOption,
  DeliveredOption,
  Option,
  DeliveriesList,
  CardContainer,
  CardHeader,
  CardHeaderText,
  CardFooter,
  Info,
  InfoTitle,
  InfoData,
  DetailsButton,
  DetailsText,
} from './styles';

import api from '~/services/api';

const pattern = 'dd/MM/yyyy';
const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

function Card({ delivery }) {
  const zonedDate = utcToZonedTime(delivery.created_at, timeZone);
  const formattedDate = format(zonedDate, pattern);

  return (
    <CardContainer>
      <CardHeader>
        <Icon name="truck" color="#7D40E7" size={27} />
        <CardHeaderText>{`Encomenda ${delivery.id}`}</CardHeaderText>
      </CardHeader>
      <CardFooter>
        <Info>
          <InfoTitle>Data</InfoTitle>
          <InfoData>{formattedDate}</InfoData>
        </Info>
        <Info>
          <InfoTitle>Cidade</InfoTitle>
          <InfoData>{delivery.recipient.city}</InfoData>
        </Info>
        <DetailsButton>
          <DetailsText>Ver detalhes</DetailsText>
        </DetailsButton>
      </CardFooter>
    </CardContainer>
  );
}

export default function Dashboard() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const [deliveries, setDeliveries] = useState([]);
  const [pendingSelected, setPendingSelected] = useState(true);

  function handleLogout() {
    dispatch(signOut());
  }

  async function loadData(pending) {
    if (pending) {
      const response = await api.get(
        `deliveryman/${user.id}/deliveries?delivered=not`
      );
      setDeliveries(response.data);
      return;
    }
    const response = await api.get(
      `deliveryman/${user.id}/deliveries?delivered=yes`
    );
    setDeliveries(response.data);
  }

  useEffect(() => {
    loadData(pendingSelected);
  }, [pendingSelected]);

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
          <PendingOption
            selected={pendingSelected}
            onPress={() => setPendingSelected(true)}
          >
            <Option selected={pendingSelected}>Pendentes</Option>
          </PendingOption>
          <DeliveredOption
            selected={!pendingSelected}
            onPress={() => setPendingSelected(false)}
          >
            <Option selected={!pendingSelected}>Entregues</Option>
          </DeliveredOption>
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
