import styled from 'styled-components/native';

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-self: center;
  width: 100%;

  background-color: ${props => props.theme.COLORS.GRAY_600};;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(props => ({
  color: props.theme.COLORS.GREEN_700
}))`
`;