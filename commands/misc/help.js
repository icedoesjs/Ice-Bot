module.exports = class help {
    constructor() {
      this.name = 'help',
        this.alias = ['help', 'hp'],
        this.usage = 'i/help'
    }

    async run(client, message, args, Discord) {
       const helpEmbed = new Discord.MessageEmbed() 
	     .setColor('#0000FF')
	     .setTitle('Help Prompt')
	     .setURL('https://ice-bot.xyz')
       .setAuthor('Ice Bot')
	     .setDescription('Ice Bot is basically a subreddit bot, pulling images and text from subreddits!')
       .addField('Meme', 'A Dank meme from your fav subreddit!.')
       .addField('Pewds', 'A random image from pewdiepies epic subreddit!')
       .addField('Cp', 'Text from copypasta subreddit.')
       .addField('Df', 'A free image from the DeepFried Subreddit')
       .addField('St', 'Text from r/showerthoughts')
       .addField('Cf', 'A basic coinflip')
       .addField('Rps', 'Rock, paper, scissors shoot!')
       .addField('8Ball', 'A magic 8 ball machine.')
       .addField('Kick', 'Kick the tagged user.')
       .addField('Ban', 'Ban the tagged user.')
	     .setTimestamp()
       .setFooter('Ice Bot made by IceyyM8#0816, More to come!');
      message.channel.send(helpEmbed)
     await console.log(`Help Command ran`)
   }};
