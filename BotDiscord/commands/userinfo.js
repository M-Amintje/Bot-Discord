const Discord = require("discord.js");
const moment = require("moment");
 
module.exports.run = async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "En ligne",
        idle: "Inactif",
        dnd: " Ne pas dérenger",
        offline: " Hors-Ligne/Invisble"
    }
    let mentionedUser = message.mentions.users.first() || message.author;
 
    const member = message.mentions.members.first() || message.guild.members.fetch(args[0]) || message.member;
    let target = message.mentions.users.first() || message.author

 
    let embed = new Discord.MessageEmbed()
        .setAuthor(member.user.username)
        .setThumbnail((target.displayAvatarURL))
        .setColor("#00ff00")
        .addField("Pseudo :two_women_holding_hands:", `${member.user.tag}`, inline)
        .addField(":id:", member.user.id, inline)
        .addField("Statut", `${status[member.user.presence.status]}`, inline, true)
        .addField("Joue à 🎮 ", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Ne joue pas"}`, inline, true)
        .addField("A rejoint Discord le :", moment(member.user.createdAt).format("LL"), true)
        .setFooter(`Information a propos de ${member.user.username}`)
        .addField('📅 Arriver sur le serveur', moment(message.guild.members.fetch(member.id).joinedAt).format("LL"), true)
        .setThumbnail(mentionedUser.displayAvatarURL)
        .setTimestamp()
 
    message.channel.send(embed);
 
    message.delete();
}
 
module.exports.help = {
    name: "userinfo"
}