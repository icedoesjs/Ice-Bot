module.exports = class reload {
        constructor() {
            this.name = 'reload',
                this.alias = ['reload'],
                this.usage = 'i/reload'
        }

        async run(client, message, args, Discord, lc) {
            if (message.author.id != "272155374889730049") return message.reply("Sorry, but you are not whitelisted for this.")

            if(!args[1]) return message.reply("Please provide a command to reload")

             let comandname = args[1].toLowerCase()

            try {
                delete require.cache[require.resolve(`./${commandname}.js`)]
                client.commands.delete(commandname)
                const pull = require(`./${commandname}.js`)
                client.commands.set(commandname, pull)
            } catch(e) {
              return message.reply(`Could not reload: **${args[1].toLowerCase()}.js**`)
            }

            message.reply(`${args[1].toLowerCase()} was reloaded!`)
        }
    }