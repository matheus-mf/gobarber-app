import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';
import { Provider } from './index';

interface ProviderContainerProps {
  selected: boolean;
}

interface ProviderNameProps {
  selected: boolean;
}

interface HourPros {
  available: boolean;
  selected: boolean;
}

interface HourTextPros {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #28262e;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
  color: #f5ede8;
  margin-left: 16px;
`;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  margin-left: auto;
`;

export const Content = styled.ScrollView``;

export const ProvidersListContainer = styled.View`
  height: 112px;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px;
`;

export const ProviderContainer = styled(RectButton)<ProviderContainerProps>`
  flex-direction: row;
  align-items: center;
  background: ${props => (props.selected ? '#ff9000' : '#3e3b47')};
  padding: 8px 12px;
  margin-right: 16px;
  border-radius: 10px;
`;

export const ProviderAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const ProviderName = styled.Text<ProviderNameProps>`
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
  color: ${props => (props.selected ? '#232129' : '#f4ebe8')};
  margin-left: 8px;
`;

export const Calendar = styled.View``;

export const Title = styled.Text`
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
  color: #f4ebe8;
  margin: 0 24px 24px;
`;

export const OpenDatePickerButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  height: 46px;
  background: #ff9000;
  border-radius: 10px;
  margin: 0 24px;
`;

export const OpenDatePickerButtonText = styled.Text`
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
  color: #232129;
`;

export const Schedule = styled.View`
  padding: 24px 0 16px;
`;

export const Section = styled.View`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  color: #999591;
  margin: 0 24px 12px;
`;

export const SectionContent = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 24 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Hour = styled(RectButton)<HourPros>`
  padding: 12px;
  background: ${props => (props.selected ? '#ff9000' : '#3e3b47')};
  border-radius: 10px;
  margin-right: 8px;

  opacity: ${props => (props.available ? 1 : 0.3)};
`;

export const HourText = styled.Text<HourTextPros>`
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  color: ${props => (props.selected ? '#232129' : '#f4ebe8')};
`;

export const CreateAppointmentButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #ff9000;
  border-radius: 10px;
  margin: 0 24px 24px;
`;

export const CreateAppointmentButtonText = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
  color: #232129;
`;
