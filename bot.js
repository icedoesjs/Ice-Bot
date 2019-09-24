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
const prefix = config.prefix;
const db = require('quick.db');
var color = config.color;
var version = config.version;
var numcommands = config.commands
const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');

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
        await cmd.run(client, message, args, config, prefix, db, version, color); //Add vars here
    } catch (error) {
        console.error(error)
        await console.error(`Error: ${error}`);
        await console.error(`Error Message: ${error.message}`);
    }
}
});

client.on("ready", () => {
  // Check if the table "points" exists.
  const table = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'scores';").get();
  if (!table['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE scores (id TEXT PRIMARY KEY, user TEXT, guild TEXT, points INTEGER, level INTEGER);").run();
    // Ensure that the "id" row is always unique and indexed.
    sql.prepare("CREATE UNIQUE INDEX idx_scores_id ON scores (id);").run();
    sql.pragma("synchronous = 1");
    sql.pragma("journal_mode = wal");
  }

    // And then we have two prepared statements to get and set the score data.
    client.getScore = sql.prepare("SELECT * FROM scores WHERE user = ? AND guild = ?");
    client.setScore = sql.prepare("INSERT OR REPLACE INTO scores (id, user, guild, points, level) VALUES (@id, @user, @guild, @points, @level);");
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
 const embed = new Discord.MessageEmbed()
   .setTitle("Thank you for adding me!")
   .setColor(config.color)
   .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
   .setDescription(`Thank you for adding me to your guild, you can see all my commands by doing i/help. \n I currently am being actively developed so expect changes and improvements. \n If you would like welcome messages please name your welcome channel welcomes. \n If you encounter any errors please don 't hesitate to join [our Discord](https://discord.gg/qRdNb9D)!`)
   .addField("Stats:", `Guilds: ${client.guilds.size} Users: ${client.users.size}`, true)
   .addField("Quick Links:", `[Github](https://github.com/iceyym8/Ice-Bot) [Invite](https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot) [Support](https://discord.gg/qRdNb9D) [Vote](https://bots.ondiscord.xyz)`, true)
   .setColor(config.color)
   .setFooter(`Thank you for using Ice bot, I was made by IceyyM8#0816 | Active Development Phase | Commands: ${numcommands}`)
   const joinchannel = guild.channels.find(channel => channel.name === "general");
   joinchannel.send(embed)
   console.log("The embed on join was sent!")
});



client.on("guildDelete", guild => { //Reset activity on leave
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id}), all database files were removed!`);
 client.user.setActivity(`i/help | Watching ${client.guilds.size} servers`);
})

client.on("message", message => {
  if (message.author.bot) return;
  let score;
  if (message.guild) {
    score = client.getScore.get(message.author.id, message.guild.id);
    if (!score) {
      score = {
        id: `${message.guild.id}-${message.author.id}`,
        user: message.author.id,
        guild: message.guild.id,
        points: 0,
        level: 1
      }
    }
    score.points++;
    const curLevel = Math.floor(0.1 * Math.sqrt(score.points));
    if (score.level < curLevel) {
      score.level++;
      const embed = new Discord.MessageEmbed()
      .setAuthor(client.user.username)
      .setTitle(`a user ranked up!`)
      .setDescription(`${message.author.username} ranked up to rank ${curLevel}!`)
      .setTimestamp()
      message.channel.send(embed)
    }
    client.setScore.run(score);
  }
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Command-specific code here!
});

const invites = {};

// A pretty useful method to create a delay without blocking the whole script.
const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  // "ready" isn't really ready. We need to wait a spell.
  wait(1000);

  // Load all invites for all guilds and save them to the cache.
  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  // To compare, we need to load the current invite list.
  member.guild.fetchInvites().then(guildInvites => {
    // This is the *existing* invites for the guild.
    const ei = invites[member.guild.id];
    // Update the cached invites for the guild.
    invites[member.guild.id] = guildInvites;
    // Look through the invites, find the one for which the uses went up.
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    var welctxt = db.get('serverInfo.wtxt')
    if (welctxt === undefined) {
      db.set('serverInfo.wtxt', `Welcome to ${member.guild.name} please enjoy your stay here.`)
    }
    if (invite === undefined) {
      let (invite.code = "None")
      let (inviter.tag = "None")
      let (invite.uses = "None")
    }
    // This is just to simplify the message being sent below (inviter doesn't have a tag property)
    const inviter = client.users.get(invite.inviter.id);
    const welcomechannel = member.guild.channels.find(channel => channel.name === "welcomes");
    const welcomeEmbed = new Discord.MessageEmbed()
      .setColor('#0000FF')
      .setTitle(`Welcome ${member.user.username} to ${member.guild.name}`)
      .setDescription(`${welctxt}`)
      .setThumbnail(member.user.avatarURL)
      .addField(`Invite Code Used:`, `discord.gg/${invite.code}`, true)
      .addField(`Invited by:`, `${inviter.tag}`, true)
      .addField(`Invite uses:`, `${invite.uses}`, true)
      .setFooter(`Thank you for using Ice Bot | Member count: ${member.guild.memberCount}`)
      .setTimestamp()
    welcomechannel.send(welcomeEmbed)
  });
});