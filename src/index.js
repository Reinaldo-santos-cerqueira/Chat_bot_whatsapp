// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const bot = require("venom-bot");
const banco = require("./banco"); 
const stages = require("./stages")
bot.create().then((client) => start(client));
  function start(client) {
    client.onMessage((message) => {
      let resp  = stages.step[getStage(message.from)].obj.execute(
        message.from,
        message.body
      );
      for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        client.sendText(message.from, element);
      }
    }
  )}
function getStage(user){
    return banco.db[user].stage;
}