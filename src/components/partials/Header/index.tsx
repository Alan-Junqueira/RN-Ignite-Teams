import { useNavigation } from "@react-navigation/native"
import { HeaderBackButton, HeaderBackIcon, HeaderContainer, HeaderLogo } from "./styled"
import logoImg from '@assets/logo.png'

interface IHeader {
  showBackButton?: boolean
}

export const Header = ({ showBackButton = false }: IHeader) => {
  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.navigate('groups')
  }

  return (
    <HeaderContainer>
      {showBackButton && (
        <HeaderBackButton onPress={handleGoBack}>
          <HeaderBackIcon />
        </HeaderBackButton>
      )}
      <HeaderLogo source={logoImg} />
    </HeaderContainer>
  )
}
