import client from '../getClient'
import { Interaction } from 'discord.js'

client.on('interactionCreate', async (interaction: Interaction) => {
  if (!interaction.isButton()) return

  await interaction.reply(`You have clicked the ${interaction.customId} button`)
})
