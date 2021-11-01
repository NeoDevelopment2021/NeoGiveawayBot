const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    let prefix = config.prefix;
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    let invite = new Discord.MessageEmbed()
    .setTitle("Invite & Support Link!")
    .addField("Invite Me", "[Click to Invit ME](https://discord.com/api/oauth2/authorize?client_id=898439038179098674&permissions=8&scope=bot)")//Add Your Bot Invit link here
 
    .addField("Support Server", "[Support Server](https://discord.gg/wBXesEygK6)") 
      //Add Your support server link here
       //Dont Change Anything other than Invite Link and support server
    
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag} by Neo Development`, client.user.displayAvatarURL())
    message.channel.send(invite);
}

module.exports.help = {
    name: "invite"
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