module.exports = class purge {
        constructor() {
            this.name = 'purge',
                this.alias = ['purge'],
                this.usage = 'i/purge'
        }

        async run(client, message, args, Discord) {
 async function purge() {
     message.delete(); 

     if (!message.member.hasPermission("MANAGE_MESSAGES"))
         message.channel.send('Error, you do not have permission to do that.'); 
         return; 
     }

     
     if (isNaN(args[0])) {
         
         message.reply('Error, Please provide a number of messages to delete!'); 
         return;
     }
     if (args !== 0) 

     message.channel.bulkDelete(args)
         .catch(error => message.channel.send(`Error: ${error}`)); 

 }

 }