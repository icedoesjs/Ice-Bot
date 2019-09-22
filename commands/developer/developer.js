module.exports = class devcmds {
    constructor() {
        this.name = 'devcmds',
            this.alias = ['devcmds', 'developer'],
            this.usage = 'i/devcmds'
    }

    async run(client, message, args, Discord) {
           if (message.author.id != "272155374889730049") return message.reply("Sorry, you are nto whitelisted for this!")

        const devEmbed = new Discord.MessageEmbed()
            .setColor('#0000FF')
            .setTitle('Developer Commands')
            .setURL('https://ice-bot.xyz')
            .setAuthor(`${message.author.username}`)
            .setDescription('Developer commands are only to be used by developer')
            .addField('Reload (command)', 'Reloads the .js file for the command')
            .addField('Kill', 'Kills the bot using process.exit')
            .addField('Reboot', 'Restarts the bot')
            .setTimestamp()
            .setFooter('Developer Commands');
         message.channel.type === (`"dm"`) + message.author.send(devEmbed)
         message.delete(500)
        await console.log(`The developer help prompt was intiated by ${message.author.username}`)
    }
};
