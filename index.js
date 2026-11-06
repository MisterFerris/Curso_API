const express = require("express")
const app = express()
const RotasProfessores = require("./routes/professores.routes")
const RotasCursos = require("./routes/cursos.routes")

app.use(express.json())
app.use("/professores", RotasProfessores)
app.use("/cursos", RotasCursos)

// Conectar com o banco de dados


// ----- Rotas do professor -----


// ----- Rotas de cursos -----


app.listen(3000, () => console.log("API no AR"))