const mercado_controller = require("../controllers/mercado.js")
const fornecedor_controller = require("../controllers/fornecedor.js")

let nextId = 1


const model = (body, id = nextId++) => {

    if (
        body.nome != undefined &&
        body.quantidade >= 0 &&
        body.nome !=""
    ) {
        return {
            id,
            nome: body.nome,
            quantidade: body.quantidade,
            mercado: body.mercado_id,
            fornecedor: body.fornecedor_id
    
        }
    }
}

module.exports = model