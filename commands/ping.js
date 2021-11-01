const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  if(message.author.bot) return;
  
  let prefix = config.prefix;
  
  if(!message.content.startsWith(prefix)) return;
  
  const m = await message.channel.send("Hold on .....")
  
  let pong = new Discord.MessageEmbed()
  .setTitle("🏓 Pong!")
  .setColor('RANDOM')
  .setTimestamp()
  .addField("Latency", `${m.createdTimestamp - message.createdTimestamp}ms`, true)
  .addField("API Latency", `${Math.round(client.ws.ping)}ms`, true)
  .setFooter(`Requested by ${message.author.tag} by Neo Development`, message.author.displayAvatarURL());

  m.edit(pong)
}

module.exports.help = {
  name: "ping"
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