module.exports = class donate {
        constructor() {
            this.name = 'donate',
                this.alias = ['donate', 'dn'],
                this.usage = 'i/donate'
        }

        async run(client, message, args, Discord) {
                const donateEmbed = new Discord.MessageEmbed()
                 .setColor('#0000FF')
                     .setAuthor("Ice Bot")
                     .setTitle("Donation are always appreciated")
                     .setURL(`https://paypal.me/IceyyM8/1`)
                     .setImage(`https://discord.js.org/static/logo-square.png`)
                     .setDescription("Donation are always accepted, you can use the the link provided or even just click on the title of this message!")
                     .addField("Please note the minimum donation is $1, you can donate using https://paypal.me/IceyyM8/1 or by clicking the title.")
                     .setFooter('Thank you for using Ice Bot')
                 message.channel.send(donateEmbed)
        }
    }
