module.exports = class invite {
    constructor() {
        this.name = 'invite',
            this.alias = ['invite'],
            this.usage = 'i/invite'
    }

    async run(client, message, args, Discord) {
            const inviteEmbed = new Discord.MessageEmbed()
                .setColor('#0000FF')
                .setTitle(client.user.username)
                .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=479018256682713092&permissions=8&scope=bot`)
                .setDescription(`Ice bot loves to be invited to anything`)
                .setFooter("Thank you for using Ice Bot.")
            message.channel.send(inviteEmbed) 
    }
}