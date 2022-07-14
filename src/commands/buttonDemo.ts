import { SlashCommandBuilder, SlashCommandStringOption } from '@discordjs/builders'
import { CommandInteraction, MessageActionRow, MessageButton } from 'discord.js'
import { BaseCommand } from './BaseCommand'

const buttonDemo: BaseCommand = {
  data: new SlashCommandBuilder()
    .setName('getbutton')
    .setDescription('Buttons demo')
    .addStringOption((option: SlashCommandStringOption) => {
      return option.setName('type')
        .setDescription('Type of button you want')
        .setRequired(true)
        .setChoices(
          { name: 'All', value: 'all' },
          { name: 'Primary', value: 'primary' },
          { name: 'Danger', value: 'danger' },
          { name: 'Link', value: 'link' },
          { name: 'Secondary', value: 'secondary' },
          { name: 'Success', value: 'success' }
        )
    }),
  execute: async (interaction: CommandInteraction) => {
    const row = new MessageActionRow()
    switch (interaction.options.getString('type')) {
      case 'primary':
        row.addComponents(new MessageButton()
          .setCustomId('primary')
          .setLabel('Primary Button')
          .setStyle('PRIMARY'))
        break
      case 'danger':
        row.addComponents(new MessageButton()
          .setCustomId('danger')
          .setLabel('Danger Button')
          .setStyle('DANGER'))
        break
      case 'link':
        row.addComponents(new MessageButton()
          .setLabel('Link Button')
          .setStyle('LINK')
          .setURL('https://www.google.com'))
        break
      case 'secondary':
        row.addComponents(new MessageButton()
          .setCustomId('secondary')
          .setLabel('Secondary Button')
          .setStyle('SECONDARY'))
        break
      case 'success':
        row.addComponents(new MessageButton()
          .setCustomId('success')
          .setLabel('Success Button')
          .setStyle('SUCCESS'))
        break
      default:
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
    }
    await interaction.reply({ content: 'Here are the buttons you need', components: [row] })
  }
}

export default buttonDemo
