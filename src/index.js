const express = require("express")
const mercado_router = require("./routes/mercado.js")
const fornecedor_router = require("./routes/fornecedor.js")
const produto_router = require("./routes/produto.js")
const app = express()
const port = 5000

app.use(express.json())
// app.use(cep_endereco) // Middleware de uso global



app.use("/produto", produto_router)
app.use("/fornecedor", fornecedor_router)
app.use("/mercado", mercado_router)

app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})