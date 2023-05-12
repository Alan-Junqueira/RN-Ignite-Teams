import { Header } from "@components/partials/Header"
import { NewGroupContainer, NewGroupContent, NewGroupIcon } from "./styled"
import { Highlight } from "@components/Highlight"
import { Button } from "@components/Button"
import { Input } from "@components/Input"

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

        <Input />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
        />
      </NewGroupContent>
    </NewGroupContainer>
  )
}
