module.exports = class tiktok {
        constructor() {
            this.name = 'tiktok',
                this.alias = ['tiktok', 'tik', 'tok'],
                this.usage = 'i/tiktok'
        }

        async run(client, message, args, Discord, lc) {
            var voiceChannel = message.member.voiceChannel;
            voiceChannel.join().then(connection => {
                message.channel.send(this.name + " Well, you asked for it!")
            }).catch(err => console.log(err));
            const dispatcher = connection.playFile('./audio/screech.mp3');
            dispatcher.on("end", end => {
                message.channel.send("It's over")
            });
           voiceChannel.leave();
        }
    }
