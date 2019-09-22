const Discord = require('discord.js');
const client = new Discord.Client({
  disableEveryone: true,
});
const fs = require('fs');
const request = require('request')
const fetch = require('node-fetch');
const config = require("./config.json");
const {CommandHandler} = require('djs-commands');
const requireAll = require('require-all');
const lc = require('letter-count');
const prefix = config.prefix;
const db = require('quick.db');
var color = "#0000FF";
var version = "Beta 1"

//Database Configs
db.set('serverInfo.filter', {toggled: 'true'}) //By diffult the bad word filter is toggled on, this database has upcoming plans
db.set('userInfo.money', 100)
db.set('userInfo.level', 0)



//Command Handler
const CH = new CommandHandler({
    folder: __dirname + '/commands/',
  prefix: ['i/']
});
//Event handler
const files = requireAll({ 
    dirname: `${__dirname}/events`, 
    filter: /^(?!-)(.+)\.js$/ 
}); 
client.removeAllListeners(); // Prevent duplicate listeners on reload.

for (const name in files) { 
    const event = files[name]; // attach listeners to each
    client.on(name, event.bind(null, client)); 
    console.log(`\u001b[32m`, `Loading event: ${name}`);
    console.log(`\u001b[32 m`, `Done loading all events!`) 
} 

//Error Handler
client.on('message', async (message) => {
if (message.member.type === 'bot') return undefined;
      if (message.channel.type === 'dm') return undefined;
  
      let args = message.content.split(" ");
      let command = args[0].toLowerCase();
  let cmd = CH.getCommand(command);
if (cmd) {
    try {
        await cmd.run(client, message, args, config, Discord, lc, prefix, db, version, color); //Add vars here
    } catch (error) {
        await console.error(`Error: ${error}`);
        await console.error(`Error Message: ${error.message}`);
    }
}
});

client.on('ready', () => { //On ready
 console.log(`\u001b[31m`, `------------[ Ice Bot ]------------`)
 console.log(`\u001b[32m`, `Welcome To Ice Bot\n Written By Iceyy\n Check loads above for handlers\n Refer to config.json and event_handler.js for config prefixes!`)
 console.log(`\u001b[31m`, `------------[ Ice Bot ]------------`)

 console.log(`\u001b[31m`, `\n\n------------[ Stats ]------------`)
 console.log(`\u001b[32m`, `Bot Username: ${client.user.username}\n Invite Link: https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
  console.log(`\u001b[32m`, `Running for ${client.guilds.size} guild(s) and ${client.users.size} users!`)
 console.log(`\u001b[31m`, `------------[ Ice Bot ]------------`)
 //client.user.setActivity(`for i/help on ${client.guilds.size} server(s)`, {type: "WATCHING"}); // Use when Development is done
 client.user.setActivity(`i/help | Watching ${client.guilds.size} servers`, {type: "LISTENING"});
})

client.login(config.token); //Token Login


client.on("guildCreate", guild => { //Reset activity on Join
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
 client.user.setActivity(`i/help | Watching ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => { //Reset activity on leave
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
 client.user.setActivity(`i/help | Watching ${client.guilds.size} servers`);
})
