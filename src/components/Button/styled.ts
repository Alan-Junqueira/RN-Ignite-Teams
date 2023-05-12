import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type TButtonStyleProps = 'PRIMARY' | 'SECONDARY';

interface IButtonProps {
  type: TButtonStyleProps
}

export const ButtonContainer = styled(TouchableOpacity) <IButtonProps>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;

  justify-content: center;
  align-items: center;

  ${props => props.type === 'PRIMARY' && css`
    background-color: ${props => props.theme.COLORS.GREEN_700};
  `};

  ${props => props.type === 'SECONDARY' && css`
    background-color: ${props => props.theme.COLORS.RED_DARK};
  `};
`;

export const ButtonTitle = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE.MD}px;
  color: ${props => props.theme.COLORS.WHITE};
  font-family: ${props => props.theme.FONT_FAMILY.BOLD};
`;