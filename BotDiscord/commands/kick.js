const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    let kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.fetch(args[0]));
    if(!kickUser) return message.channel.send("Je ne trouve pas cet utilisateur");
    let KickReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Tu n'as pas les permissions");
    if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cet utilisateur ne peut pas être expulsé ou banni");
 
    let KickEmbed = new Discord.MessageEmbed()
    .setTitle("__**KICK**__")
        .setColor("#bc0000")
        .setDescription(`${kickUser} à bien été kick par <@${message.author.id}> dans le channel : ${message.channel}. Motif du kick : ${KickReason}`);
 
        let KickChannel = message.channel;
 
    message.guild.member(kickUser).kick(KickReason)
    KickChannel.send(KickEmbed);
 
    return;
}
module.exports.help = {
    name: "kick"
}