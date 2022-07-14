import client from '../getClient'
import { Interaction } from 'discord.js'
import { commandsCollection } from '../commands'
import logger from '../logger'

client.on('interactionCreate', async (interaction: Interaction) => {
  if (!interaction.isCommand() || interaction.member === null) return
  logger.verbose(`${interaction.member} AKA ${interaction.member.user.username} send a "${interaction.commandName}" command in guild "${interaction.guild}"`)
  const command = commandsCollection.get(interaction.commandName)

  if (!command) return
  try {
    await command.execute(interaction)
  } catch (error) {
    logger.error(error)
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
  }
})
