import { Collection } from 'discord.js'
import { BaseCommand } from './BaseCommand'

const commandsCollection = new Collection<string, BaseCommand>()
const addCommand = (command: BaseCommand) => {
  commandsCollection.set(command.data.name, command)
}

export { commandsCollection, addCommand }
