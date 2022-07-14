import { Collection } from 'discord.js'
import buttonDemo from './buttonDemo'
import { REST } from '@discordjs/rest'
import { Routes, RESTPostAPIApplicationCommandsJSONBody } from 'discord-api-types/v9'
import discordToken from '../getToken'
import client from '../getClient'
import { BaseCommand } from './BaseCommand'

const commandsCollection = new Collection<string, BaseCommand>()
commandsCollection.set(buttonDemo.data.name, buttonDemo)

const commandsSetup = async (): Promise<boolean> => {
  if (client.user === null) {
    return false
  }
  const commandsSetupBody: RESTPostAPIApplicationCommandsJSONBody[] = []
  commandsCollection.map((value: BaseCommand) => {
    commandsSetupBody.push(value.data.toJSON())
    return null
  })
  const rest = new REST({ version: '9' }).setToken(discordToken)
  await rest.put(Routes.applicationCommands(client.user.id),
    { body: commandsSetupBody })
  return true
}

export { commandsSetup, commandsCollection }
