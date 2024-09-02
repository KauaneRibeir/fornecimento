const cep_endereço_middlewares = require("../middlewares/cep_endereço.js")

let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome != undefined &&
        body.endereço != undefined &&
        body.nome != "" &&
        body.endereço != "" 
    ) {
        return {
            id,
            nome: body.nome,
            endereço: body.cep_endereço_id
        }
    }
}

module.exports = model