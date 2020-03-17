import styled from 'styled-components/native';

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

export const Title = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  margin: -60px 0 10px 0;
  text-align: center;
`;

export const ProblemsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const CardContainer = styled.View`
  width: 85%;
  height: 55px;
  border-radius: 4px;
  background-color: #ffffff;
  border: 1px solid #0000001a;
  align-self: center;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const ProblemDescription = styled.Text`
  color: #444444;
  font-size: 16px;
`;

export const ProblemDate = styled.Text`
  color: #999999;
  font-size: 12px;
`;

export const EmptyMessage = styled.View`
  margin: auto;
  width: 85%;
  align-items: center;
`;

export const EmptyText = styled.Text`
  color: #444444;
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 25px;
`;
