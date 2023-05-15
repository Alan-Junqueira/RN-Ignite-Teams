import { ButtonIcon } from "@components/ButtonIcon"
import { PlayerCardContainer, PlayerCardIcon, PlayerCardName } from "./styled"

interface IPlayerCard {
  name: string
  onRemove: () => void
}

export const PlayerCard = ({ name, onRemove }: IPlayerCard) => {
  return (
    <PlayerCardContainer>
      <PlayerCardIcon name="person" />
      <PlayerCardName>{name}</PlayerCardName>
      <ButtonIcon
        icon="close"
        type="SECONDARY"
        onPress={onRemove}
      />
    </PlayerCardContainer>
  )
}
