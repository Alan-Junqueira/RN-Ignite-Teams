import { Header } from '@components/partials/Header';
import { GroupsContainer } from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket', 'amigos']);
  return (
    <GroupsContainer>
      <Header />
      <Highlight
        title='Turmas'
        subtitle='jogue com a sua turma'
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
      />

    </GroupsContainer>
  );
}