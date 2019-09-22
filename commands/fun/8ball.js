module.exports = class eightball {
        constructor() {
            this.name = '8ball',
                this.alias = ['8', '8ball'],
                this.usage = 'i/8ball'
        }

        async run(client, message, args, Discord, lc) {
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
    var msg1 = Array(5);
    msg1[1] = "Yes";
    msg1[2] = "No";
    msg1[3] = "Maybe";
    msg1[4] = "Without a doubt.";
    msg1[5] = "I have no idea"
    msg1[6] = "Unlikely"
    var x = getRandomInt(0, 20);
    if (x < 5) {
        if (x < 3) {
            message.channel.send(msg1[1]);
            message.react ("🎱");
        } else {
            message.channel.send(msg1[3]);
             message.react("🎱");
        }
    } else if (x <= 9) {
        if (x >= 7) {
            message.channel.send(msg1[2]);
             message.react("🎱");
        } else {
            message.channel.send(msg1[4]);
             message.react("🎱");
        }
    } else if (x <= 12) {
        message.channel.send(msg1[5]);
         message.react("🎱");
    } else {
        message.channel.send(msg1[6])
         message.react("🎱");
    }
}}