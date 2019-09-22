module.exports = class shutdown {
        constructor() {
            this.name = 'shutdown',
                this.alias = ['shutdown'],
                this.usage = 'i/shutdown'
        }

        async run(client, message, args, Discord, lc) {
            if (message.member.id !== "272155374889730049")
            return message.reply("Sorry, but it looks like you aren't whitelisted for this!")

            try {
            await message.channel.send(`**Ice Bot was shutdown by ${message.author.username}**`)
            process.exit()
        } catch(e) {
            return message.reply(`There was an error ${e.message}`)
        }
    }}