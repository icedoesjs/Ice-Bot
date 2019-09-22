module.exports = class feedback {
        constructor() {
            this.name = 'feedback',
                this.alias = ['feedback', 'feed'],
                this.usage = 'i/feedback'
        }

        async run(client, message, Discord, config, args) {
            var feedback = args.slice(1).join(" ")

            if (!args.length) {
                return message.channel.send(`You didn't provide any feedback, ${message.author}!`);
            }
                                const sentEmbed = new Discord.MessageEmbed()
                                    .setColor('#0000FF')
                                    .setAuthor(message.author.username)
                                    .setTitle("Feedback Recieved")
                                    .setThumbnail(client.user.avatarURL)
                                    .setDescription(`${feedback}`)
                                    .addField(`Info`, `Sent from ${guilds.name}, channel:${guild.channel.name}, person who sent it: ${message.author.username}`)
                                    .setTimestamp()
                                await message.channel.send(sentEmbed)

                    const feedbackEmbed = new Discord.MessageEmbed()
                        .setColor('#0000FF')
                        .setAuthor(message.author.username)
                        .setTitle("Feedback Submitted!")
                        .setThumbnail(client.user.avatarURL)
                        .setDescription(`Your feedback: ${feedback}`)
                        .setFooter(`Thank you ${message.author} for your feedback`)
                    await message.channel.send(feedbackEmbed)
        }
    }