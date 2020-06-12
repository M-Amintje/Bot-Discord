const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    const verlvl = {
        0: "Aucun",
        1: "Bas",
        2: "Moyen",
        3: "(╯°□°）╯︵ ┻━┻",
        4: "(ノಠ益ಠ)ノ彡┻━┻"  
    }
 
    let inline = true
    let servericon = message.guild.iconURL;
    let serverembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(servericon)
        .setAuthor(message.guild.name)
        .addField("Nom", message.guild.name, inline)
        .addField("ID :id:", message.guild.id, inline)
        .addField("Owner :crown:", message.guild.owner, inline)
        .addField("Région", message.guild.region, inline)
        .addField("Niveau de verification", verlvl[message.guild.verificationLevel], inline)
        .addField("Nombre de membres",  `${message.guild.memberCount}`, inline)
        .addField("Serveur rejoint le :", message.member.joinedAt)
        .setFooter(`Créé le ${message.guild.createdAt}`);
 
    message.channel.send(serverembed);
 
    message.delete();
 
}
 
module.exports.help = {
    name: "si"
}