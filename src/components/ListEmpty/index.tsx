import { ListEmptyContainer, ListEmptyMessage } from "./styled"

interface IListEmpty {
  message: string
}

export const ListEmpty = ({ message }: IListEmpty) => {
  return (
    <ListEmptyContainer>
      <ListEmptyMessage>{message}</ListEmptyMessage>
    </ListEmptyContainer>
  )
}
