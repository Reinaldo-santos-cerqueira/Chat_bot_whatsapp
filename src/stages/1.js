const banco = require("../banco");
const stage0 = require("./0");
function execute(user, msg) {
  if ((msg === "1")) {
    let produtos_apresentacao =
      "Nossos produtos\n\n" +
      "   1     -   Desenvolvimento web\n" +
      "   2     -   Desenvolvimento mobile\n" +
      "   3     -   Produção audio visual\n" +
      "   4     -   Social media\n" +
      "   5     -   Gestão de trafego";
    banco.db[user].stage = 2;
    return [produtos_apresentacao];
  } else if ((msg === "2")) {
    let chamar_funcionario = "Esta certo chamarei um dos nosso representantes";
    banco.db[user].stage = 2;
    return [chamar_funcionario];
  } else if(msg !== '1' && msg !== '2') {
    banco.db[user].stage = 0;
    return [
      "Opção invalida voltando ao primeiro contato",
      stage0.execute(banco.db[user].stage, msg),
    ];
  }
}
exports.execute = execute;
