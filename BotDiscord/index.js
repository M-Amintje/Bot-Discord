const Discord = require("discord.js")
const config = require("./config.json")
const bot = new Discord.Client();
const fs = require("fs");
bot.commands = new Discord.Collection();
 
fs.readdir("./commands/", (err, files) => {
 
  if(err) console.log(err);
 
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Je ne trouve pas les commandes");
    return;
  }
 
jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} chargée!`);
  bot.commands.set(props.help.name, props);
});
 
  fs.readdir("./events/", (error, f) => {
    if (error) console.log(error);
    console.log(`${f.length} events en chargement`);
 
    f.forEach((f) => {
      const events = require(`./events/${f}`);
      const event = f.split(".")[0];
 
      bot.on(event, events.bind(null, bot));
    });
  });
 
});

bot.on("ready", () => {
  console.log(bot.user.username + " est en ligne !")
});
 
bot.on("message", async message => {
 
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let content = message.content.split(" ");
  let command = content[0];
  let args = content.slice(1);
  let prefix = config.prefix;
 
 
 
  let commandfile = bot.commands.get(command.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
})

const activities_list = [
  "Je suis le meilleur BOOOT !!!", 
  "Version 0.0.1",
  "//help", 
  ];

bot.on('ready', () => {
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
      bot.user.setActivity(activities_list[index]);
  }, 2000);
 });
 
bot.login(config.token)