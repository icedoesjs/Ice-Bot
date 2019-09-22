module.exports = class test {
    constructor() {
        this.name = 'test',
            this.alias = ['test', 't'],
            this.usage = 'i/test'
    }

    async run(client, message, args) {
        message.channel.send('This was the first command ever, use it nicely!');
    }
}