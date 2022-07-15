import { REST } from '@discordjs/rest'
import { Routes, RESTPostAPIApplicationCommandsJSONBody } from 'discord-api-types/v9'
import discordToken from '../getToken'
import client from '../getClient'
import { BaseCommand } from './BaseCommand'
import { commandsCollection } from './commandsCollection'
import { ContextMenuCommandBuilder } from '@discordjs/builders'
import './features/index'

const commandsSetup = async (): Promise<boolean> => {
  if (client.user === null) {
    return false
  }
  const commandsSetupBody: RESTPostAPIApplicationCommandsJSONBody[] = []
  commandsCollection.map((value: BaseCommand) => {
    commandsSetupBody.push(value.data.toJSON())
    return null
  })
  commandsSetupBody.push(new ContextMenuCommandBuilder()
    .setName('echo')
    .setType(2))
  const rest = new REST({ version: '9' }).setToken(discordToken)
  await rest.put(Routes.applicationCommands(client.user.id),
    { body: commandsSetupBody })
  return true
}

export { commandsSetup, commandsCollection }
