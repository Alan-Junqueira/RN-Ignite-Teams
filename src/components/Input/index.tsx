import { TextInputProps } from "react-native";
import { useTheme } from 'styled-components/native'

import { InputContainer } from "./styled";

type TInput = TextInputProps & {
}


export const Input = ({ ...props }: TInput) => {
  const { COLORS } = useTheme()

  return (
    <InputContainer
      placeholderTextColor={COLORS.GRAY_300}
      {...props}
    />
  )
}
