import { TextInputProps } from "react-native";
import { InputContainer } from "./styled";

type TInput = TextInputProps & {
}


export const Input = ({ ...props }: TInput) => {
  return (
    <InputContainer
      {...props}
    />
  )
}
