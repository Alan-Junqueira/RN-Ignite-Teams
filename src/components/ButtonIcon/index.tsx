import { TouchableOpacityProps } from "react-native"
import { ButtonIconContainer, ButtonIconMaterialIcons } from "./styled"

interface IButtonIcon extends TouchableOpacityProps {

}

export const ButtonIcon = ({ }: IButtonIcon) => {
  return (
    <ButtonIconContainer>
      <ButtonIconMaterialIcons name="home" type="PRIMARY"/>
    </ButtonIconContainer>
  )
}
