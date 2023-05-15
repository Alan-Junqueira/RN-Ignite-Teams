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
${props => css`
  font-size: ${props.theme.FONT_SIZE.MD}px;
  color: ${props.theme.COLORS.WHITE};
  font-family: ${props.theme.FONT_FAMILY.BOLD};
`};
`;