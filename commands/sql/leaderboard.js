      module.exports = class leaderboard {
              constructor() {
                  this.name = 'leaderboard',
                      this.alias = ['leaderboard'],
                      this.usage = 'i/leaderboard'
              }

              async run(client, message) {
const Discord = require('discord.js');
const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');
const top10 = sql.prepare("SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 10;").all(message.guild.id);
var color = "#0000FF";
let score = client.getScore.get(message.author.id, message.guild.id);
client.getScore = sql.prepare("SELECT * FROM scores WHERE user = ? AND guild = ?");

// Now shake it and show it! (as a nice embed, too!)
const embed = new Discord.MessageEmbed()
    .setTitle("Rank Leaderboard")
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription(`${message.guild.name}'s top 10 points leaders!`)
    .setColor(color);

for (const data of top10) {
    embed.addField(client.users.get(data.user).tag, `${data.points} points (rank ${data.level})`);
}
return message.channel.send({embed});
}}