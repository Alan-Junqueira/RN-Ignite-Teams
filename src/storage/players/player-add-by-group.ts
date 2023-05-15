import AsyncStorage from '@react-native-async-storage/async-storage'
import { TPlayerStorageDTO } from './PlayerStorageDTO'
import { PLAYER_COLLECTION } from '@storage/storageConfig'

export const PlayerAddByGroup = async (newPlayer: TPlayerStorageDTO, group: string) => {
  try {
    

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, '' )
  } catch (error) {
    throw (error)
  }
}