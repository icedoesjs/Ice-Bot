 module.exports = class filter {
         constructor() {
             this.name = 'filter',
                 this.alias = ['filter', 'toggle'],
                 this.usage = 'i/filter'
         }

         async run(client, message, Discord, lc, db, prefix, args) {
             const option = 'on,off' 
             if (!args.length) {
                 return message.channel.send(`Please supply either on or off, ${message.author}!`);
             }
             if (option !== 'on', 'off');
              message.reply("Please supply either on or off!");
            if (args[0] === 'on') 
            {db.set('serverInfo.filter', {toggled: 'true'}).then(i => console.log(i))
            return message.reply("Your word filter was toggled on.")
            }
            else if (args[0] === 'off');
            {db.set('serverInfo.filter', {toggled: 'true'}).then(i => console.log(i))
            return message.reply("Your word filter was toggled off.")
        }
    }}