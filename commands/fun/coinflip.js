module.exports = class coinflip {
        constructor() {
            this.name = 'coinflip',
                this.alias = ['cf', 'coinflip'],
                this.usage = 'i/cf'
        }

        async run(client, message, args, Discord, lc) {
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }
    var msg2 = Array(2);
    msg2[1] = "You got Heads";
    msg2[2] = "Ew Tails";
    var x = getRandomInt(0, 8);
    if (x < 4) {
        message.channel.send(msg2[1]);
        message.react("💰");
    } else {
        message.channel.send(msg2[2]);
        message.react("💰");
    }
}}