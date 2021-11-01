const Discord = require('discord.js');
const config = require('../config.json');
const os = require('os');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let servercount = client.guilds.cache.size;
    let usercount = client.users.cache.size;
    let channelscount = client.channels.cache.size;
    let arch = os.arch();
    let platform = os.platform();
    let shard = client.ws.shards.size;
    let NodeVersion = process.version;
    let cores = os.cpus().length;

    let stats = new Discord.MessageEmbed()
    .setAuthor('GhostGenix')
    .setTitle(`Statistics of ${client.user.username}`)
    .setColor('RED')
    .addField("Server Count", `${servercount}`, true)
    .addField("Users Count", `${usercount}`, true)
    .addField("Channel's Count", `${channelscount}`, true)
    .addField('Architecture', `${arch}`, true)
    .addField('Platform', `${platform}`, true)
    .addField('Node-Version', `${NodeVersion}`, true)
    .addField('Shards', `${shard}`, true)
    .addField('Cores', `${cores}`, true)
    .setTimestamp()
    .setFooter(`${message.author.tag} by Neo Development`, message.author.displayAvatarURL());
    message.channel.send(stats);
};

module.exports.help = {
    name: "stats"
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