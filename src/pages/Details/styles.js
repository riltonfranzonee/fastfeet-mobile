import styled from 'styled-components/native';
import { darken } from 'polished';

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

export const Card = styled.View`
  margin-top: 110px;
  height: 210px;
  width: 85%;
  background-color: #ffffff;
  border: 1px solid #0000001a;
  border-radius: 4px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0 0 10px;
`;

export const CardHeaderText = styled.Text`
  font-weight: bold;
  color: #7d40e7;
  font-size: 15px;
  margin-left: 10px;
`;

export const CardItem = styled.View`
  margin: 10px 0 0 10px;
`;

export const CardItemTitle = styled.Text`
  font-weight: bold;
  color: #999999;
  text-transform: uppercase;
  font-size: 15px;
  margin-bottom: 5px;
`;

export const CardText = styled.Text`
  color: #666666;
  font-size: 14px;
  max-width: 100%;
`;

export const CardProgress = styled.View`
  margin-top: 10px;
  height: 190px;
  width: 85%;
  background-color: #ffffff;
  border: 1px solid #0000001a;
  border-radius: 4px;
`;

export const CardDate = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  width: 85%;
  justify-content: space-between;
  margin-top: 10px;
`;

export const AddProblemButton = styled.TouchableOpacity`
  width: 33.33%;
  background-color: ${darken(0.01, '#f8f9fd')};
  align-items: center;
  justify-content: center;
  height: 85px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-right-width: 1px;
  border-style: solid;
  border-right-color: #0000001a;
`;

export const ViewProblemButton = styled.TouchableOpacity`
  width: 33.33%;
  background-color: ${darken(0.01, '#f8f9fd')};
  align-items: center;
  justify-content: center;
  height: 85px;
  border-right-width: 1px;
  border-style: solid;
  border-right-color: #0000001a;
`;

export const ConfirmButton = styled.TouchableOpacity`
  width: 33.33%;
  background-color: ${darken(0.01, '#f8f9fd')};
  align-items: center;
  justify-content: center;
  height: 85px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const ButtonText = styled.Text`
  width: 80px;
  text-align: center;
`;
