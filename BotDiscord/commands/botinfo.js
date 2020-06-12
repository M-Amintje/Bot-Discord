const Discord = require("discord.js")
const os = require('os')
const cpuStat = require("cpu-stat");
const moment = require("moment")
 
 
module.exports.run = async (bot, message, args) => {
 
    let { version } = require("discord.js");
 
    cpuStat.usagePercent(function (err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
 

        let embedStats = new Discord.MessageEmbed()
            .setTitle("__**Informations du bot**__")
            .setColor("RANDOM")
            .addField("Créateur du bot :", "Momin (Le chat en jupe)#5959")
            .addField("RAM Utilisée ", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
            .addField("En ligne depuis ⏲", (Math.round(bot.uptime / (1000 * 60 * 60 * 24)) % 30) + " Jours, " + (Math.round(bot.uptime / (1000 * 60 * 60))) + " h, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " min, est " + (Math.round(bot.uptime / 1000) % 60) + " sec", true)
            .addField("Discord.js ", `v${version}`, true)
            .addField("Node ", `${process.version}`, true)
            .addField("CPU ", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
            .addField("Utilisation du CPU ", `\`${percent.toFixed(2)}%\``, true)
            .addField("Architecture", `\`${os.arch()}\``, true)
            .addField("Platforme", `\`\`${os.platform()}\`\``, true)
            .addField("Language de Dev du bot :", "Javascript")
            .setFooter("AstriaRP BOT")
 
        message.channel.send(embedStats)
    })
 
 
 
}
 
module.exports.help = {
    name: "botinfo"
}