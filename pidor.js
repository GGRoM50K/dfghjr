const Discord = require('discord.js')
const client = new Discord.Client({disableEveryone: true});
client.on('ready', () => {
console.log('ready!');
});
client.on('message', async msg => {
if (msg.content === 'ping') {
msg.channel.send('pong!')
}
});
client.login(process.env.tok0k)