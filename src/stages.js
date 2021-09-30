var stages = {
    0:{
        description: "Boas vindas",
        obj:require("./stages/0")
    },
    1:{
        description: "Vendas",
        obj:require("./stages/1")
    },
    2:{
        description: "Resumo",
        obj:require("./stages/2")
    },
    3:{
        description: "Dev web",
        obj:require("./stages/3")
    },
    4:{
        description: "Dev web 1",
        obj:require("./stages/4")
    },
    5:{
        description: "Dev web 2",
        obj:require("./stages/5")
    },
}
exports.step    = stages;