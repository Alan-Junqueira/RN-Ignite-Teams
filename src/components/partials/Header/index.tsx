import { HeaderContainer, HeaderLogo } from "./styled"
import logoImg from '@assets/logo.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo source={logoImg} />
    </HeaderContainer>
  )
}
