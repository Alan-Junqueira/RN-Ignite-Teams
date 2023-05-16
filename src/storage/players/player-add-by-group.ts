import AsyncStorage from '@react-native-async-storage/async-storage'
import { TPlayerStorageDTO } from './PlayerStorageDTO'
import { PLAYER_COLLECTION } from '@storage/storageConfig'
import { playersGetByGroup } from './players-get-by-group'
import { AppError } from '@utils/AppError'

export const playerAddByGroup = async (newPlayer: TPlayerStorageDTO, group: string) => {
  try {
    const storedPlayers = await playersGetByGroup(group)

    const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name)

    if (playerAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa já está adicionada em um time aqui.')
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (error) {
    throw (error)
  }
}