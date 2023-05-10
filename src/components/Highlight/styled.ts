import styled from 'styled-components/native';

export const HighlightContainer = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const HighlightTitle = styled.Text`
  text-align: center;
  font-size: ${props => props.theme.FONT_SIZE.XL}px;
  font-family: ${props => props.theme.FONT_FAMILY.BOLD};
  color: ${props => props.theme.COLORS.WHITE};
`;

export const HighlightSubtitle = styled.Text`
  text-align: center;
  font-size: ${props => props.theme.FONT_SIZE.MD}px;
  font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
  color: ${props => props.theme.COLORS.GRAY_300};
`;