const express = require('express');
const app = express();
const SlackBot = require('slackbots');

app.get('/', (req, res) => res.send('Hello World!'))


const bot = new SlackBot({
  token: 'xoxb-7141114416-399444308178-qgEFQV7Cdujxsw7rTbffIQXR',
  name: 'dr.update'
})


bot.on('start', ()=>{
  const params ={
    icon_emoju: ':smiley:'
  }

  // bot.postMessageToChannel('random', 'Test from bot!', params);
});

bot.on('message', payload=>{
  if (payload.type !== 'message') {
    console.error('no message type');
    return;
  }

  var text = payload.text;
  var hasUrl = text.indexOf('{url:') > 0;
  // log(hasUrl)

  bot.postMessageToChannel('bottest', payload.text);
  console.log(payload.text);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
