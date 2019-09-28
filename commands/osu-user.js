module.exports = class user {
        constructor() {
            this.name = 'user',
                this.alias = ['user'],
                this.usage = 'i/user'
        }

        async run(client, message, args) {
            const Discord = require('discord.js')
            const osu = require('node-osu');
            const db = require('quick.db')
            var apikey = '00e51a32f6bdbedc63e5f17445c9851ef9aa58a3'
           var identifer = message.author.id
           var username = db.get(`userinfo${identifer}.osuname`)
            const fetch = require("node-fetch");

      if (username == undefined) return message.reply('It looks like your osu name is not set, please do i/osuname [name]')
               
                      fetch(`https://osu.ppy.sh/api/get_user?u=${username}&k=${apikey}`).then(response => {
                              return response.json();
                          }).then(json => {
                const user = new Discord.MessageEmbed()
                .setColor('#FFC0CB')
                .setTitle(`Stats for ${username}`)
                .addField('Playcount:', json[0].playcount, true)
                .addField('Total Seconds Played:', json[0].total_seconds_played, true)
                .addField('Total Score:', json[0].total_score, true)
                .addField('Level:', json[0].level, true)
                .addField('Accuracy:', json[0].accuracy, true)
                .addField('Country', json[0].country, true)
                .addField('Join date:', json[0].join_date, true)
                .setFooter(`Stats from osu.ppy.sh`)
                message.channel.send(user)
                          })
                        }
                    }