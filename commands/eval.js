const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const Beautify = require('beautify');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;
  
  if (message.author.id !== "846040824105926676") {
    return message.channel.send(":x: Forbidden: This Command is for <@846040824105926676>")
  }
  
  if (!args[0]) {
    message.channel.send("You need to evaluate _**SOMETHING**_ Please!")
  }
  
  try {
    if (args.join(" ").toLowerCase().includes("token")) {
      return;
    }
    
    const toEval = args.join(" ");
    const evaluated = eval(toEval);
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Eval")
    .addField("ToEvaluate", `\`\`\`js\n${Beautify(args.join(" "), { format: "js" })}\n\`\`\``)
    .addField("Evaluated", evaluated)
    .addField("Type of:", typeof(evaluated))
    .setTimestamp()
    .setFooter(`${message.author.tag} by Neo Development`, client.user.displayAvatarURL())
    message.channel.send(embed);
    
  } catch (e) {
    let errorembed = new Discord.MessageEmbed()
    .addField("\:x: Error!")
    .setDescription(e)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, client.user.displayAvatarURL())
    message.channel.send(errorembed);
  }
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
