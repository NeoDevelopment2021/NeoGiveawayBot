const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setAuthor("Giveaway Commands")
      .setTitle("Command List & Guide for the Bot")
      .setDescription("Below are Commands you can do with Bot, Right now there is only 6 commands for Giveaway .. More added Soon")
      .addField("🎁 Giveaway 🎁","start [channel-name] [Time] [winners] [Prize]\nreroll [prize name]\nend [prize name]")
      .addField("Examples", "g!start #giveaway 5m 1 Testing\ng!end Testing\ng!reroll Testing")
      .addField("Utility", "ping, invite", true)
      .addField("ℹ Information ℹ", "stats", true)
      .setTimestamp()
      .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send("**Sent the commands in Direct Messages! 💌, Check DMs**");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}

/**
 * @INFO
 * Bot Coded by G O D G A M E R#6964 | 
 * @INFO
 * Working for Neo Development
 * @INFO
 * Please mention Him in Neo Development, when using this Code!
 * @INFO
 * Discord Server[https://discord.gg/wBXesEygK6]
 */
