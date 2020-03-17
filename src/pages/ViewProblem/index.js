import React, { useState, useEffect } from 'react';
import { utcToZonedTime, format } from 'date-fns-tz';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  TopBox,
  Title,
  ProblemsList,
  CardContainer,
  ProblemDescription,
  ProblemDate,
  EmptyMessage,
  EmptyText,
} from './styles';

import api from '~/services/api';

const pattern = 'dd/MM/yyyy';
const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

function Card({ problem }) {
  const zonedDate = utcToZonedTime(problem.createdAt, timeZone);
  const problemDate = format(zonedDate, pattern);

  return (
    <CardContainer>
      <ProblemDescription>{problem.description}</ProblemDescription>
      <ProblemDate>{problemDate}</ProblemDate>
    </CardContainer>
  );
}

export default function ViewProblem({ route }) {
  const { id } = route.params;
  const [problems, setProblems] = useState([]);

  async function loadData() {
    try {
      const response = await api.get(`delivery/${id}/problems`);
      setProblems(response.data);
    } catch (err) {
      Alert.alert('Houve um erro no servidor');
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <TopBox />
      <Title>{`Encomenda ${id}`}</Title>
      {problems.length >= 1 ? (
        <ProblemsList
          data={problems}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Card problem={item} />}
        />
      ) : (
        <EmptyMessage>
          <EmptyText>Nenhum problema registrado na encomenda</EmptyText>
          <Icon name="check-circle-outline" size={50} color="#7D40E7" />
        </EmptyMessage>
      )}
    </Container>
  );
}

ViewProblem.propTypes = {
  route: PropTypes.object.isRequired,
};

Card.propTypes = {
  problem: PropTypes.object.isRequired,
};
