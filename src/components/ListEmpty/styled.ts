import styled from 'styled-components/native';

export const ListEmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-self: center;
`;

export const ListEmptyMessage = styled.Text`
  text-align: center;
  
  font-size: ${props => props.theme.FONT_SIZE.SM}px;
  font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
  color: ${props => props.theme.COLORS.GRAY_300};
`;