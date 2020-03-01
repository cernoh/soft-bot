const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NjgzNjc5MDcyOTM2NjU2OTI4.XlvD1w.y_Dyh8sDScfJ3x13TMNfEnEB2p8';
const softspeak = ['feelings', 'sad','emotional','happy','still thinking','brains are weird',"i'm upset",'i love', 'i miss', 'still thinking about'];

client.login(token);

client.on('message', message => {

  if (softspeak.some(v => message.content.toLowerCase() === v)) {
     // Will only return when the `str` is included in the `softspeak`
     message.channel.send("y'all too soft and it shows")
  }

});
