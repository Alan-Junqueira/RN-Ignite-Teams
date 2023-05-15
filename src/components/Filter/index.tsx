import { TouchableOpacityProps } from "react-native"
import { FilterContainer, FilterTitle, TFilterContainerProps } from "./styled"

interface IFilter extends TouchableOpacityProps, TFilterContainerProps {
  title: string
}

export const Filter = ({ title, isActive = false, ...props }: IFilter) => {
  return (
    <FilterContainer isActive={isActive} {...props}>
      <FilterTitle>{title}</FilterTitle>
    </FilterContainer>
  )
}
