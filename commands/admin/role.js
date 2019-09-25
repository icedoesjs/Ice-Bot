      module.exports = class role {
              constructor() {
                  this.name = 'role',
                      this.alias = ['role'],
                      this.usage = 'i/role'
              }

              async run(client, message) {
                  const db = require('quick.db')
                  const Discord = require('discord.js')
                  var prefix = 'i/role'
                  const args = message.content.slice(prefix.length).trim().split(/ +/g);
                  const role = message.mentions.roles.first()
                  var ident = message.guild.id

                  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Sorry, you do not have permissions!")

                  if (!role) return message.reply("Please mention a role.") 
                  message.delete()

                  message.channel.send(`Your auto role was set to ${role}`)
                  db.set(`serverinfo.role${ident}`, `${id}`)
                  console.log(`[AUTOROLE] The role for ${ident} was set to ${role}!`)
                  message.delete()
              }
            }