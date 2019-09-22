 module.exports = class ban {
         constructor() {
             this.name = 'ban',
                 this.alias = ['ban'],
                 this.usage = 'i/ban'
         }

         async run(client, message, args, Discord, lc) {
 if (!message.member.hasPermission("ADMINISTRATOR"))
     return message.reply("Error, you do not have permission!");

 let member = message.mentions.members.first();
 if (!member)
     return message.reply("Please mention a server member");
 if (!member.bannable)
     return message.reply("Error, Either this user is higher than me or I do not have permission.");

 let reason = args.slice(2).join(' ');
 if (!reason) reason = "No reason";

 await member.ban(reason)
     .catch(error => message.reply(`${message.author}  attempted to ban ${message.author.tag} but there was an error: ${error}`));
 message.reply(`${member.user.tag} was banned by ${message.author.tag} because: ${reason}`);
 }}