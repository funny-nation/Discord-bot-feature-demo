import { SlashCommandBuilder } from '@discordjs/builders'
import { CommandInteraction } from 'discord.js'

export interface BaseCommand{
    data: SlashCommandBuilder,
    execute: (interaction: CommandInteraction) => Promise<any>
}
