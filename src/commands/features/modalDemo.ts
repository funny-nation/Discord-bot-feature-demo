import { BaseCommand } from '../BaseCommand'
import { SlashCommandBuilder } from '@discordjs/builders'
import { CommandInteraction, Modal, TextInputComponent, MessageActionRow, ModalActionRowComponent } from 'discord.js'
import { addCommand } from '../commandsCollection'

const modalDemo: BaseCommand = {
  data: new SlashCommandBuilder()
    .setName('getmodal')
    .setDescription('Modal demo'),
  async execute (interaction: CommandInteraction) {
    const modal = new Modal()
      .setCustomId('myModal')
      .setTitle('This is a modal')
      // Add components to modal
      // Create the text input components
    const favoriteColorInput = new TextInputComponent()
      .setCustomId('favoriteColorInput')
    // The label is the prompt the user sees for this input
      .setLabel("What's your favorite color?")
    // Short means only a single line of text
      .setStyle('SHORT')
    const hobbiesInput = new TextInputComponent()
      .setCustomId('hobbiesInput')
      .setLabel("What's some of your favorite hobbies?")
    // Paragraph means multiple lines of text.
      .setStyle('PARAGRAPH')
      // An action row only holds one text input,
      // so you need one action row per text input.
    const firstActionRow = new MessageActionRow<ModalActionRowComponent>().addComponents(favoriteColorInput)
    const secondActionRow = new MessageActionRow<ModalActionRowComponent>().addComponents(hobbiesInput)
    // Add inputs to the modal
    modal.addComponents(firstActionRow, secondActionRow)
    // Show the modal to the user
    await interaction.showModal(modal)
  }
}

addCommand(modalDemo)
