const Discord = require("discord.js")
const CommandHandler = require('./handlers/CommandHandler');
const EventHandler = require('./handlers/EventHandler');
const process = require("node:process")

require('dotenv').config();

const client = new Discord.Client({
    intents: 3276799,
});

client.commands = new Discord.Collection();

process.on("unhandledRejection", async (reason, promise) => {
    console.log("Unhandled Rejection at:", promise, "reason", reason)
});

(async () => {
    await CommandHandler(client);
    await EventHandler(client);
    client.login(process.env.TOKEN);
})();

module.exports = client