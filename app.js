const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready',() => {
	console.log('I\'m Online\nI\'m Online');
});

var oyun = [
  `I just testing`, 
  `I love You baby`, 
  `The Best Server Discord`,
  `I Need U Here xD`,
  `Server that testing bot`,
`${prefix} is prefix|Using ${(((process.memoryUsage().heapUsed)/1024)/1024).toFixed(0)}Mb's of RAM`,
`server link invite https://discord.gg/2n2MNJ6`];

setInterval(function() {

  var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

  client.user.setGame(oyun[random], "https://www.twitch.tv/UngKimYou");
  }, 15000);

var prefix = "~"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.sendMessage('pong');
	}
});

client.login(settings.token);
