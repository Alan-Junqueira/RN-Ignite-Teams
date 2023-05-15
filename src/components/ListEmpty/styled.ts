import styled, { css } from 'styled-components/native';

export const ListEmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-self: center;
`;

export const ListEmptyMessage = styled.Text`
  text-align: center;

  ${props => css`
    font-size: ${props.theme.FONT_SIZE.SM}px;
    font-family: ${props.theme.FONT_FAMILY.REGULAR};
    color: ${props.theme.COLORS.GRAY_300};
  `};
  
`;
