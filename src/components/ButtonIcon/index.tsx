import { TouchableOpacityProps } from "react-native"
import { ButtonIconContainer, ButtonIconMaterialIcons, TButtonIconStyleProps } from "./styled"
import { MaterialIcons } from "@expo/vector-icons"

interface IButtonIcon extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: TButtonIconStyleProps
}

export const ButtonIcon = ({ icon, type = 'PRIMARY', ...props }: IButtonIcon) => {
  return (
    <ButtonIconContainer {...props}>
      <ButtonIconMaterialIcons name={icon} type={type} />
    </ButtonIconContainer>
  )
}
