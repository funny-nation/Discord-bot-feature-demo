import client from '../getClient'
import { Interaction } from 'discord.js'

client.on('interactionCreate', async (interaction: Interaction) => {
  if (!interaction.isModalSubmit()) return

  if (interaction.customId === 'myModal') {
    const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput')
    const hobbies = interaction.fields.getTextInputValue('hobbiesInput')
    await interaction.reply({ content: `Your favorite color is ${favoriteColor}, and your hobby is ${hobbies}` })
  }
})
