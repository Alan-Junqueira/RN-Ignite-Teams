import { UsersThree } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const GroupCardContainer = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${props => props.theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  
  padding: 24px;
  margin-bottom: 24px;
`;

export const GroupCardTitle = styled.Text`
  ${props => css`
    font-size: ${props.theme.FONT_SIZE.MD}px;
    color: ${props.theme.COLORS.GRAY_200};
    font-family: ${props.theme.FONT_FAMILY.REGULAR};
  `};
`;

export const GroupCardIcon = styled(UsersThree).attrs(props => ({
  size: 32,
  color: props.theme.COLORS.GREEN_700,
  weight: 'fill'
}))`
  margin-right: 20px;
`;