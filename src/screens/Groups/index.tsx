import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/partials/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { groupsGetAll } from '@storage/group/groupsGetAll';

import { GroupsContainer } from './styles';

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation()

  const handleNewGroup = () => {
    navigation.navigate('new')
  }

  const fetchGroups = async () => {
    try {
      const data = await groupsGetAll()
      setGroups(data)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

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
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar a primeira turma?' />}
      />

      <Button
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
    </GroupsContainer>
  );
}