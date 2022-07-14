import client from './getClient'
import discordToken from './getToken'
import { commandsSetup } from './commands'
import isTest from './isTest'
import './events/buttons'
import './events/commands'
import logger from './logger'

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
