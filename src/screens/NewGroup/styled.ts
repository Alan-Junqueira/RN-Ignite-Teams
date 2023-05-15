import { UsersThree } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const NewGroupContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const NewGroupContent = styled.View`
  flex: 1;
  justify-content: center;
`;

export const NewGroupIcon = styled(UsersThree).attrs(props => ({
  size: 56,
  color: props.theme.COLORS.GREEN_700
}))`
  align-self: center
`;