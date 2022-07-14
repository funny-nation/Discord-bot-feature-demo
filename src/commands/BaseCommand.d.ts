import { SlashCommandBuilder } from '@discordjs/builders'
import { CommandInteraction } from 'discord.js'

export interface BaseCommand{
    data: Omit<SlashCommandBuilder>,
    execute: (interaction: CommandInteraction) => Promise<any>
}
