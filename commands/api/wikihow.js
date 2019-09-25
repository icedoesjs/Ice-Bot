module.exports = class uwu {
    constructor() {
        this.name = 'uwu',
            this.alias = ['uwu'],
            this.usage = 'i/uwu'
    }

    async run(client, message, args) {
        const Discord = require('discord.js');
        const fetch = require("node-fetch");
        let url = message.author.avatarURL
  fetch(`https://nekobot.xyz/api/imagegen?type=awooify&url=${message.author.avatarURL}`).then(response => {
          return response.json();
      }).then(json => { // Print the response status code if a response was received
        message.reply(json.message)
      })}}