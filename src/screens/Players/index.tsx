import { Header } from "@components/partials/Header"
import { PlayersContainer } from "./styled"
import { Highlight } from "@components/Highlight"
import { ButtonIcon } from "@components/ButtonIcon"

export const Players = () => {
  return (
    <PlayersContainer>
      <Header showBackButton/>

      <Highlight 
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <ButtonIcon />
    </PlayersContainer>
  )
}
