if (process.env.DISCORD_TOKEN === undefined) {
  process.exit(0)
}
const discordToken: string = process.env.DISCORD_TOKEN
export default discordToken
