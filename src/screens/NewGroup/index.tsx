import { Header } from "@components/partials/Header"
import { NewGroupContainer, NewGroupContent, NewGroupIcon } from "./styled"
import { Highlight } from "@components/Highlight"
import { Button } from "@components/Button"
import { Input } from "@components/Input"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"

export const NewGroup = () => {
  const [group, setGroup] = useState('');

  const navigation = useNavigation()

  const handleNew = () => {
    navigation.navigate('players', { group })
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
          onChangeText={setGroup}
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
