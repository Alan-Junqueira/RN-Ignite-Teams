import { Header } from "@components/partials/Header"
import { NewGroupContainer, NewGroupContent, NewGroupIcon } from "./styled"
import { Highlight } from "@components/Highlight"
import { Button } from "@components/Button"

export const NewGroup = () => {
  return (
    <NewGroupContainer>
      <Header showBackButton />

      <NewGroupContent>
        <NewGroupIcon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Button
          title="Criar"
        />
      </NewGroupContent>
    </NewGroupContainer>
  )
}
