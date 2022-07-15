import { BaseCommand } from '../BaseCommand'
import { SlashCommandBuilder, SlashCommandStringOption } from '@discordjs/builders'
import { CommandInteraction, MessageActionRow, MessageSelectMenu } from 'discord.js'
import { addCommand } from '../commandsCollection'

const manuDemo: BaseCommand = {
  data: new SlashCommandBuilder()
    .setName('getmenu')
    .setDescription('Menu demo')
    .addStringOption((option: SlashCommandStringOption) => {
      return option.setName('type')
        .setDescription('Type of manu you want')
        .setRequired(true)
        .setChoices(
          { name: 'normal', value: 'normal' },
          { name: 'multi-select manu', value: 'option' }
        )
    }),
  async execute (interaction: CommandInteraction) {
    const row = new MessageActionRow()
    switch (interaction.options.getString('type')) {
      case 'normal':
        row.addComponents(
          new MessageSelectMenu()
            .setCustomId('normalManu')
            .setPlaceholder('Nothing selected')
            .addOptions([
              {
                label: 'Selection A',
                description: 'This is selection A',
                value: 'A'
              },
              {
                label: 'Selection B',
                description: 'This is another selection',
                value: 'B'
              }
            ])
        )
        break
      case 'option':
        row.addComponents(
          new MessageSelectMenu()
            .setCustomId('multiSelectManu')
            .setPlaceholder('Nothing selected')
            .setMinValues(2)
            .setMaxValues(3)
            .addOptions([
              {
                label: 'Selection A',
                description: 'This is selection A',
                value: 'A'
              },
              {
                label: 'Selection B',
                description: 'This is selection B',
                value: 'B'
              },
              {
                label: 'Selection C',
                description: 'This is selection C',
                value: 'C'
              }
            ])
        )
        break
    }

    await interaction.reply({ content: 'Here is the manu', components: [row] })
  }
}

addCommand(manuDemo)
