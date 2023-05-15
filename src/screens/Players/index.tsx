import { Header } from "@components/partials/Header"
import { PlayersContainer, PlayersForm } from "./styled"
import { Highlight } from "@components/Highlight"
import { ButtonIcon } from "@components/ButtonIcon"
import { Input } from "@components/Input"
import { Filter } from "@components/Filter"

export const Players = () => {
  return (
    <PlayersContainer>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <PlayersForm>


        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />

        <ButtonIcon icon="add" />
      </PlayersForm>

      <Filter 
        title="Time A"
      />
    </PlayersContainer>
  )
}
