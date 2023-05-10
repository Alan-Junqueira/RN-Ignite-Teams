import { TouchableOpacityProps } from 'react-native'
import { GroupCardContainer, GroupCardIcon, GroupCardTitle } from './styled';

interface IGroupCard extends TouchableOpacityProps {
  title: string;
}

export const GroupCard = ({ title, ...rest }: IGroupCard) => {
  return (
    <GroupCardContainer {...rest}>
      <GroupCardIcon />
      <GroupCardTitle>{title}</GroupCardTitle>
    </GroupCardContainer>
  )
}
