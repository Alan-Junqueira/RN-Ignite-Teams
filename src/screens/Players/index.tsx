import { useState } from "react"
import { FlatList } from "react-native"

import { Header } from "@components/partials/Header"
import { PlayersContainer, PlayersForm, PlayersHeaderList, PlayersNumberOfPlayers } from "./styled"
import { Highlight } from "@components/Highlight"
import { ButtonIcon } from "@components/ButtonIcon"
import { Input } from "@components/Input"
import { Filter } from "@components/Filter"
import { PlayerCard } from "@components/PlayerCard"

export const Players = () => {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState(['Alan', "Alan2"]);

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

      <PlayersHeaderList>

        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              key={item}
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <PlayersNumberOfPlayers>{players.length}</PlayersNumberOfPlayers>
      </PlayersHeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            key={item}
            onRemove={() => { }}
          />
        )}
      />

    </PlayersContainer>
  )
}
