import { HeaderBackButton, HeaderBackIcon, HeaderContainer, HeaderLogo } from "./styled"
import logoImg from '@assets/logo.png'

interface IHeader {
  showBackButton?: boolean
}

export const Header = ({ showBackButton = false }: IHeader) => {
  return (
    <HeaderContainer>
      {showBackButton && (
        <HeaderBackButton>
          <HeaderBackIcon />
        </HeaderBackButton>
      )}
      <HeaderLogo source={logoImg} />
    </HeaderContainer>
  )
}
