import styled from 'styled-components/native';
import { CaretLeft } from 'phosphor-react-native'


export const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderLogo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const HeaderBackButton = styled.TouchableOpacity`
  flex: 1
`;

export const HeaderBackIcon = styled(CaretLeft).attrs(props => ({
  size: 32,
  color: props.theme.COLORS.WHITE
}))`
  
`;