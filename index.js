const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
  token: "ODY5ODYxNjc4NjM0OTEzNzk0.GeBqds.U4-ZbuSmBLk07faaWV4Zd6DRNaqFhxDPL4fU3I",
  prefix: "!",
  intents: ["GUILDS", "GUILD_MESSAGES"]
})

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

//Events
bot.onMessage()
bot.onInteractionCreate();

//Command Example (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})

//Slash creation
bot.command({
  name: "slash",
  code: `
  $createApplicationCommand[global;version;test;true]`
  //This will make our slash command
  })

  bot.interactionCommand({
    name: "version", 
    prototype : 'slash',
    code: `$interactionReply[Package Version: $packageVersion]`
    })
    bot.onInteractionCreate()


bot.variables({
  rep: 0
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})