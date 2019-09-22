module.exports = class rps {
        constructor() {
            this.name = 'rps',
                this.alias = ['rps', 'shoot'],
                this.usage = 'i/rps'
        }

        async run(client, message, args, Discord, lc) {
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }
    var msg1 = Array(3);
    msg1[1] = "Rock!";
    msg1[2] = "Paper.";
    msg1[3] = "Scissors!"
    var x = getRandomInt(0, 9);
    if (x < 6) {
        if (x < 3) {
            message.channel.send(msg1[1]); //rock
            message.react("☘️");
        } else {
            message.channel.send(msg1[3]); // scissors
            message.react("✂️");
        }
    } else {
        message.channel.send(msg1[2]); //paper
        message.react("🧻");
    }}}