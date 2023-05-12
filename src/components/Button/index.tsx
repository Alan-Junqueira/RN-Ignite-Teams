import { TouchableOpacityProps } from "react-native"
import { ButtonContainer, ButtonTitle, TButtonStyleProps } from "./styled";

type TButton = TouchableOpacityProps & {
  title: string;
  type?: TButtonStyleProps
}

export const Button = ({ title, type = 'PRIMARY', ...props }: TButton) => {
  return (
    <ButtonContainer type={type} {...props}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  )
}
