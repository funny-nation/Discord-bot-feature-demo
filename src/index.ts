import client from './getClient'
import discordToken from './getToken'
import { commandsSetup } from './commands'
import isTest from './isTest'
import './events/buttons'
import './events/commands'
import './events/menus'
import './events/modalSubmit'
import logger from './logger'
import { Interaction } from 'discord.js'

client.once('ready', async () => {
  await commandsSetup()
  logger.info('Bot started')
  if (isTest()) {
    logger.info('Test passed, now the process is going to be closed')
    process.exit(0)
  }
})

client.login(discordToken).catch((reason: string) => {
  logger.error(reason)
})

client.on('interactionCreate', async (interaction: Interaction) => {
  if (!interaction.isUserContextMenu()) return

  await interaction.reply(`You have echo ${interaction.targetUser.username}`)
})
