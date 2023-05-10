import { Header } from '@components/partials/Header';
import { GroupsContainer } from './styles';
import { Highlight } from '@components/Highlight';

export const Groups = () => {
  return (
    <GroupsContainer>
      <Header />
      <Highlight
        title='Turmas'
        subtitle='jogue com a sua turma'
      />
    </GroupsContainer>
  );
}