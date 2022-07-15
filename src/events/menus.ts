import client from '../getClient'
import { Interaction } from 'discord.js'

client.on('interactionCreate', async (interaction: Interaction) => {
  if (!interaction.isSelectMenu()) return
  await interaction.reply({ content: `You have selected the ${interaction.values.toString()} options`, components: [] })
})
