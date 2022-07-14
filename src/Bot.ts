import client from './getClient'
import discordToken from './getToken'
import { commandsSetup } from './commands'
import './events/buttons'
import './events/commands'

client.once('ready', async () => {
  await commandsSetup()
  console.log('Ready!')
})

client.login(discordToken).catch((reason: string) => {
  console.log(reason)
})
