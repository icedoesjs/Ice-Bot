module.exports = class kick {
        constructor() {
            this.name = 'kick',
                this.alias = ['kick'],
                this.usage = 'i/kick'
        }

        async run(client, message, args, Discord, lc) {
 if (!message.member.hasPermission("ADMINISTRATOR"))
     return message.reply("Error, you don't have permissions for that!");
      let member = message.mentions.members.first() || message.guild.members.get(args[0]);
      if (!member)
          return message.reply("Please mention a server member!");
      if (!member.kickable)
          return message.reply("Error, Either this user is higher than me or I do not have permission.");

      let reason = args.slice(1).join(' ');
      if (!reason) reason = "No reason was provided";

      // Now, time for a swift kick in the nuts!
      await member.kick(reason)
          .catch(error => message.reply(`${message.author} Attempted to kick ${member.user.tag} but there was an error: ${error}`));
      message.reply(`${member.user.tag} was kicked by ${message.author.tag} because: ${reason}`);

      }}
