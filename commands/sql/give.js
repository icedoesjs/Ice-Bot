      module.exports = class give {
              constructor() {
                  this.name = 'give',
                      this.alias = ['give'],
                      this.usage = 'i/give'
              }

              async run(client, message) {
                  const prefix = "i/"
                  const args = message.content.slice(prefix.length).trim().split(/ +/g);
                  const Discord = require('discord.js');
                  const SQLite = require("better-sqlite3");
                  const sql = new SQLite('./scores.sqlite');
                  const score = client.getScore.get(message.author.id, message.guild.id);
                  client.setScore = sql.prepare("INSERT OR REPLACE INTO scores (id, user, guild, points, level) VALUES (@id, @user, @guild, @points, @level);");
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Error, you are not the guild owner!");

if (score.points === undefined) return message.reply("Sorry this user has no data, so I can't give them points.")

const user = message.mentions.users.first() || client.users.get(args[0]);
if (!user) return message.reply("Please mention a user or their ID");

const pointsToAdd = parseInt(args[2], 10);
if (!pointsToAdd) return message.reply("I need an amount of points to give...")

let userscore = client.getScore.get(user.id, message.guild.id);
// It's possible to give points to a user we haven't seen, so we need to initiate defaults here too!
if (!userscore) {
    userscore = {
        id: `${message.guild.id}-${user.id}`,
        user: user.id,
        guild: message.guild.id,
        points: 0,
        level: 1
    }
}
userscore.points += pointsToAdd;

// We also want to update their level (but we won't notify them if it changes)
let userLevel = Math.floor(0.1 * Math.sqrt(score.points));
userscore.level = userLevel;

// And we save it!
client.setScore.run(userscore);

return message.channel.send(`${user.tag} has received ${pointsToAdd} points and now stands at ${userscore.points} points.`);
}}