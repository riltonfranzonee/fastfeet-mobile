import React from 'react';
import PropTypes from 'prop-types';
import { utcToZonedTime, format } from 'date-fns-tz';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  TopBox,
  Card,
  CardHeader,
  CardHeaderText,
  CardItem,
  CardItemTitle,
  CardText,
  CardProgress,
  CardDate,
  ButtonsWrapper,
  AddProblemButton,
  ButtonText,
  ViewProblemButton,
  ConfirmButton,
} from './styles';

const pattern = 'dd/MM/yyyy';
const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

export default function Details({ route }) {
  const { delivery } = route.params;
  const { recipient } = delivery;

  const zonedStartDate =
    delivery.start_date && utcToZonedTime(delivery.start_date, timeZone);
  const startDate = zonedStartDate
    ? format(zonedStartDate, pattern)
    : '--/--/--';

  const zonedEndDate =
    delivery.end_date && utcToZonedTime(delivery.end_date, timeZone);
  const endDate = zonedEndDate ? format(zonedEndDate, pattern) : '--/--/--';

  const status =
    delivery.start_date &&
    delivery.end_date === null &&
    delivery.canceled_at === null
      ? 'Retirada'
      : delivery.canceled_at
      ? 'Cancelada'
      : delivery.end_date
      ? 'Entregue'
      : delivery.start_date === null
      ? 'Pendente'
      : null;

  return (
    <Container>
      <TopBox>
        <Card>
          <CardHeader>
            <Icon name="truck" color="#7D40E7" size={27} />
            <CardHeaderText>Informações da entrega</CardHeaderText>
          </CardHeader>
          <CardItem>
            <CardItemTitle>Destinatário</CardItemTitle>
            <CardText>{recipient.name}</CardText>
          </CardItem>
          <CardItem>
            <CardItemTitle>Endereço de entrega</CardItemTitle>
            <CardText>{`${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state}, ${recipient.zip}`}</CardText>
          </CardItem>
          <CardItem>
            <CardItemTitle>Produto</CardItemTitle>
            <CardText>{delivery.product}</CardText>
          </CardItem>
        </Card>
        <CardProgress>
          <CardHeader>
            <Icon name="calendar" color="#7D40E7" size={27} />
            <CardHeaderText>Situação da entrega</CardHeaderText>
          </CardHeader>
          <CardItem>
            <CardItemTitle>Status</CardItemTitle>
            <CardText>{status}</CardText>
          </CardItem>
          <CardDate>
            <CardItem>
              <CardItemTitle>Data de retirada</CardItemTitle>
              <CardText>{startDate}</CardText>
            </CardItem>
            <CardItem>
              <CardItemTitle>Data de entrega</CardItemTitle>
              <CardText>{endDate}</CardText>
            </CardItem>
          </CardDate>
        </CardProgress>
        <ButtonsWrapper>
          <AddProblemButton>
            <Icon name="close-circle-outline" size={22} color="#E74040" />
            <ButtonText>Informar Problema</ButtonText>
          </AddProblemButton>
          <ViewProblemButton>
            <Icon name="information-outline" size={22} color="#E7BA40" />
            <ButtonText>Visualizar Problemas</ButtonText>
          </ViewProblemButton>
          <ConfirmButton>
            <Icon name="check-circle-outline" size={22} color="#7D40E7" />
            <ButtonText>Confirmar entrega</ButtonText>
          </ConfirmButton>
        </ButtonsWrapper>
      </TopBox>
    </Container>
  );
}

Details.propTypes = {
  route: PropTypes.object.isRequired,
};
