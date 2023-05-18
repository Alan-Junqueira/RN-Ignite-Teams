import { TextInput, TextInputProps } from "react-native";
import { useTheme } from 'styled-components/native'

import { InputContainer } from "./styled";
import { RefObject } from "react";

type TInput = TextInputProps & {
  inputRef?: RefObject<TextInput>
}


export const Input = ({inputRef, ...props }: TInput) => {
  const { COLORS } = useTheme()

  return (
    <InputContainer
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...props}
    />
  )
}
