import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #ffffff;
`;

export const Header = styled.SafeAreaView`
  margin-top: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 85%;
`;

export const User = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const UserInfo = styled.View`
  margin-left: 15px;
`;

export const Greeting = styled.Text`
  color: #666666;
  font-size: 12px;
`;

export const UserName = styled.Text`
  color: #444444;
  font-weight: bold;
  font-size: 22px;
  margin-left: 5px;
`;

export const LogoutButton = styled.TouchableOpacity``;

export const TopRow = styled.View`
  margin-top: 30px;
  flex-direction: row;
  width: 85%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: #444444;
  font-weight: bold;
  font-size: 22px;
`;

export const OptionsWrapper = styled.View`
  flex-direction: row;
  width: 140px;
  justify-content: space-between;
`;

export const PendingOption = styled.TouchableOpacity`
  ${props =>
    props.selected &&
    css`
      border-bottom-width: 1px;
      border-style: solid;
      border-color: #7d40e7;
    `}
`;

export const DeliveredOption = styled.TouchableOpacity`
  ${props =>
    props.selected &&
    css`
      border-bottom-width: 1px;
      border-style: solid;
      border-color: #7d40e7;
    `}
`;

export const Option = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${props => (props.selected ? '#7D40E7' : '#999999')};
`;

export const DeliveriesList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const CardContainer = styled.View`
  width: ${`${Dimensions.get('window').width * 0.85}px`};
  height: 170px;
  border: 1px solid #0000001a;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 8px 0 0 15px;
`;

export const CardHeaderText = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  font-size: 14px;
  margin-left: 10px;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  height: 65px;
  background-color: #f8f9fd;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const Info = styled.View``;

export const InfoTitle = styled.Text`
  color: #999999;
  font-size: 8px;
`;

export const InfoData = styled.Text`
  color: #444444;
  font-weight: bold;
  font-size: 12px;
`;

export const DetailsButton = styled.TouchableOpacity``;

export const DetailsText = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  font-size: 12px;
  margin-top: 5px;
`;

export const EmptyMessage = styled.View`
  margin: auto 0;
`;

export const EmptyText = styled.Text`
  color: #444444;
  font-weight: bold;
  font-size: 18px;
`;
