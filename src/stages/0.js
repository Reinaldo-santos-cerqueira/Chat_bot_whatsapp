const banco = require("../banco");

function execute(user, msg) {
  let frase_saudacao =
    "Olá sou o assistente virtual Bit \n" +
    "Seja bem vindo a nossa empresa\n\n" +
    "Digite a opção desejada\n\n" +
    "  1    -   Para conhecer nossos produtos\n" +
    "  2    -   Para falar com responsavel da empresa\n"+
    "  (Se digitar mais de caracter basta enviar novamente com uma das opções)";

  banco.db[user].stage = 1;

  return [frase_saudacao];
}
exports.execute = execute;
