import { SlashCommandBuilder } from '@discordjs/builders'
import { CommandInteraction, MessageActionRow, MessageButton } from 'discord.js'
import { BaseCommand } from './BaseCommand'

const buttonDemo: BaseCommand = {
  data: new SlashCommandBuilder()
    .setName('getbuttons')
    .setDescription('Buttons demo'),
  execute: async (interaction: CommandInteraction) => {
    const row = new MessageActionRow()
    row.addComponents(
      new MessageButton()
        .setCustomId('primary')
        .setLabel('Primary Button')
        .setStyle('PRIMARY'),
      new MessageButton()
        .setCustomId('danger')
        .setLabel('Danger Button')
        .setStyle('DANGER'),
      new MessageButton()
        .setLabel('Link Button')
        .setStyle('LINK')
        .setURL('https://www.google.com')
      ,
      new MessageButton()
        .setCustomId('secondary')
        .setLabel('Secondary Button')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('success')
        .setLabel('Success Button')
        .setStyle('SUCCESS')
    )

    await interaction.reply({ content: 'Here are the buttons', components: [row] })
  }
}

export default buttonDemo
