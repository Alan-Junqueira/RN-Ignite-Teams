import { Header } from "@components/partials/Header"
import { NewGroupContainer, NewGroupContent, NewGroupIcon } from "./styled"
import { Highlight } from "@components/Highlight"
import { Button } from "@components/Button"
import { Input } from "@components/Input"
import { useNavigation } from "@react-navigation/native"

export const NewGroup = () => {
  const navigation = useNavigation()

  const handleNew = () => {
    navigation.navigate('players', { group: 'Rocket' })
  }

  return (
    <NewGroupContainer>
      <Header showBackButton />

      <NewGroupContent>
        <NewGroupIcon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </NewGroupContent>
    </NewGroupContainer>
  )
}
