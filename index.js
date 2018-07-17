const express = require('express');
const app = express();
const SlackBot = require('slackbots');

app.get('/', (req, res) => res.send('Hello World!'))


const bot = new SlackBot({
  token: 'put the token here',
  name: 'newsbot'
});

bot.on('message', payload=>{
  if (payload.type !== 'message') {
    return;
  }

  var text = payload.text;
  var components = text.split('{url}');

  var finalMessage = '';

  if (components[0] && components[0].length > 0) {
    finalMessage += `>>>${components[0]}`;
  } 

  if (components[1] && components[1].length && components[1].length > 0) {
    finalMessage += `\n	${components[1]}`;
  }

  bot.postMessageToChannel('bottest', finalMessage);
  console.log(payload.text);
});

app.listen(3000, () => console.log('app listening on port 3000'))
