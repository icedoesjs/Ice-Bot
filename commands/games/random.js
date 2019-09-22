module.exports = class random {
        constructor() {
            this.name = 'random',
                this.alias = ['random'],
                this.usage = 'i/random'
        }

        async run(client, message, args, Discord, lc) {
            message.reply("Are you ready to play RANDOM?")
            await message.react("✅")
            await message.react("❌")

            const filter = (reaction, user) => {
                return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
            };

            message.awaitReactions(filter, {
                    max: 1,
                    time: 60000,
                    errors: ['time']
                })
                .then(collected => {
                    const reaction = collected.first();

                    if (reaction.emoji.name === '✅') {
                     console.log(`${message.author.username} started the RANDOM minigame.`)
                        message.reply("Please say the number (1-10) you think it is going to land on!")
                        const collector = new Discord.MessageCollector(message.channel, m => message.author.id === message.author.id, {time: 10000});
                         collector.on('collect', message => {
                             if (isNaN(message.content))
                        return message.reply("Sorry that is not a number")
                        
                        if (message.content != 1,2,3,4,5,6,7,8,9,10)
                          return message.reply("Please pick a number 1-10!")
                        message.edit(`Ok, you picked ${message.content}`)
                        message.reply('Spinning the RANDOM wheel...');
                        let number = Math.floor(Math.random() * 11);
                        if (number != message.content)
                        message.channel.send("Sorry you lost!")
            
                             message.channel.send("You won 100 coins, they were added to your balance!")
                             db.set('userInfo.money', 100)
                })
                .catch(collected => {
                    message.reply('The time is up');
                });
            }
                })}}