import AsyncStorage from "@react-native-async-storage/async-storage"
import { playersGetByGroup } from "./players-get-by-group"

export const playerGetByGroupAndTeam = async (group: string, team: string) => {
  try {
    const storage = await playersGetByGroup(group)

    const players = storage.filter(player => player.team = team)

    console.log(players)
    return players
  } catch (error) {
    throw error
  }
}