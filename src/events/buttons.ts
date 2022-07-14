import client from '../getClient'
import { Interaction } from 'discord.js'
import logger from '../logger'

client.on('interactionCreate', async (interaction: Interaction) => {
  if (!interaction.isButton() || interaction.member === null) return
  logger.verbose(`${interaction.member} AKA ${interaction.member.user.username} click the button in guild "${interaction.guild}"`)
  await interaction.reply(`You have clicked the ${interaction.customId} button`)
})
