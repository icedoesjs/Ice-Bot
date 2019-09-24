      module.exports = class rank {
              constructor() {
                  this.name = 'rank',
                      this.alias = ['rank'],
                      this.usage = 'i/rank'
              }

              async run(client, message) {
                const Discord = require('discord.js');
                  var color = "#0000FF";
                   let score = client.getScore.get(message.author.id, message.guild.id);
                  const SQLite = require("better-sqlite3");
                  const sql = new SQLite('./scores.sqlite');
                  client.getScore = sql.prepare("SELECT * FROM scores WHERE user = ? AND guild = ?");
             const embed = new Discord.MessageEmbed()
               .setTitle(`${message.author.username}'s level`)
               .setDescription(`You currently have ${score.points} points and are rank ${score.level}, cool!`)
               .setColor(color);
               message.channel.send(embed)
              }
            }