import client from '../getClient'
import { Interaction } from 'discord.js'
import { commandsCollection } from '../commands'

client.on('interactionCreate', async (interaction: Interaction) => {
  if (!interaction.isCommand()) return

  const command = commandsCollection.get(interaction.commandName)

  if (!command) return
  try {
    await command.execute(interaction)
  } catch (error) {
    console.error(error)
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
  }
})
