const banco = require("../banco");
const stage0 = require("./0");
const stage1 = require("./1");

function execute(user, msg) {
  if (msg === "1") {
    //Dev web
    let dev_web =
      "Desenvolvimento web\n\n" +
      "   1     -   Solicitar criação de um site\n" +
      "   2     -   Portifolio\n"+
      "   3     -   Falar com um responsavel";
    banco.db[user].stage = 3;
    return [dev_web];
  } else if (msg === "2") {
    //Dev mobile
  } else if (msg === "3") {
    //Producao audio visual
  } else if (msg === "4") {
    //Social media
  } else if (msg === "5") {
    //Gestão de trafego
  }
}
exports.execute = execute;
