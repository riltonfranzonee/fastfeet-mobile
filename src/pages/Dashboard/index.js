import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { utcToZonedTime, format } from 'date-fns-tz';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ActivityIndicator } from 'react-native';

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
  CardBody,
  ProgressBar,
  PointWrapper,
  Line,
  Point,
  PointText,
  CardFooter,
  Info,
  InfoTitle,
  InfoData,
  DetailsButton,
  DetailsText,
  EmptyMessage,
  EmptyText,
} from './styles';

import api from '~/services/api';

const pattern = 'dd/MM/yyyy';
const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

function Card({ delivery }) {
  const zonedDate = utcToZonedTime(delivery.created_at, timeZone);
  const formattedDate = format(zonedDate, pattern);

  const navigation = useNavigation();

  return (
    <CardContainer>
      <CardHeader>
        <Icon name="truck" color="#7D40E7" size={27} />
        <CardHeaderText>{`Encomenda ${delivery.id}`}</CardHeaderText>
      </CardHeader>
      <CardBody>
        <ProgressBar>
          <PointWrapper>
            <Line />
            <>
              <Point
                completed={delivery.start_date === null || delivery.start_date}
              >
                <PointText>Aguardando Retirada</PointText>
              </Point>

              <Point completed={delivery.start_date}>
                <PointText>Retirada</PointText>
              </Point>

              <Point completed={delivery.end_date}>
                <PointText>Entregue</PointText>
              </Point>
            </>
          </PointWrapper>
        </ProgressBar>
      </CardBody>
      <CardFooter>
        <Info>
          <InfoTitle>Data</InfoTitle>
          <InfoData>{formattedDate}</InfoData>
        </Info>
        <Info>
          <InfoTitle>Cidade</InfoTitle>
          <InfoData>{delivery.recipient.city}</InfoData>
        </Info>
        <DetailsButton
          onPress={() => navigation.navigate('Details', { delivery })}
        >
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
  const [isLoading, setIsLoading] = useState(false);

  function handleLogout() {
    dispatch(signOut());
  }

  async function loadData(pending) {
    if (pending) {
      setIsLoading(true);
      const response = await api.get(
        `deliveryman/${user.id}/deliveries?delivered=not`
      );
      setIsLoading(false);
      setDeliveries(response.data);
      return;
    }
    setIsLoading(true);

    const response = await api.get(
      `deliveryman/${user.id}/deliveries?delivered=yes`
    );
    setIsLoading(false);

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
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : deliveries.length >= 1 ? (
        <DeliveriesList
          data={deliveries}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Card delivery={item} />}
        />
      ) : (
        <EmptyMessage>
          <EmptyText>Por enquanto não temos nada aqui :/</EmptyText>
        </EmptyMessage>
      )}
    </Container>
  );
}

Card.propTypes = {
  delivery: PropTypes.object,
};
