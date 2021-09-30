const banco = require("../banco");
const stage1 = require("./1");

function execute(user, msg) {
  if (msg === "1") {
    return["Nós da inbit agradecemos o seu contato tenha um otimo dia"];
  }else if (msg === "2") {
    banco.db[user].stage = 1;
    msg = '1';
    return[stage1.execute(banco.db[user].stage),msg];
  }
}
exports.execute = execute;
