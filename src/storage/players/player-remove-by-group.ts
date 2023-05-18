import AsyncStorage from "@react-native-async-storage/async-storage"
import { playersGetByGroup } from "./players-get-by-group"
import { PLAYER_COLLECTION } from "@storage/storageConfig"


export const playerRemoveByGroup = async (playerName: string, group: string) => {
  try {
    const storage = await playersGetByGroup(group)

    const filteredStorage = storage.filter(p => p.name === playerName)
    const players = JSON.stringify(filteredStorage)

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)
  } catch (error) {
    throw error
  }
}