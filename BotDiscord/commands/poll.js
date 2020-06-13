const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("#ad14da")
    .setDescription(args.join(" "))
    .addField("Répondre à la question ci-dessus à l'aide d'une des réactions:",
    `
    🟩 - Pour (Oui)
    🟦 - Neutre
    🟥 - Contre (Non)
    `)
    .setTimestamp()
    .setFooter("N'hésitez pas à envoyer un autre sondage")

  const poll = await message.channel.send(embed);
  await poll.react("🟩");
  await poll.react("🟦");
  await poll.react("🟥");
};

module.exports.help = {
  name: "poll"
}