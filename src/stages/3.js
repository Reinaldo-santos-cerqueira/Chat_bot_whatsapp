const banco = require("../banco");

function execute(user, msg) {
  if (msg === "1") {
    let tipo_site =
      "Tipo de site\n\n" +
      "   1     -   Loja online\n" +
      "   2     -   Site Delivery\n" +
      "   3     -   Landing page(Site de apresentação)\n" +
      "   4     -   Sites com agendamento\n" +
      "   5     -   Outro tipo de site";
    banco.db[user].stage = 4;
    return [tipo_site];
  } else if (msg === "2") {
    let portifolio_text =
      "Você pode ver nossos projetos no instagram \n @inbitdev \n\n" +
      "Deseja encerrar o seu contato:" +
      "   1     -   Sim\n" +
      "   2     -   Voltar para o menu";
    banco.db[user].stage = 5;
    return [portifolio_text];
  } else if (msg === "3") {
    return ["Agradecemos o seu contato irei chamar um responsavel"];
  }
}
exports.execute = execute;
