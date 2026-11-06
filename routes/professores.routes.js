const express = require("express")
const router = express.router() // Quando criar um aquivo router precisa usar o express.router
const db = require("../db")

router.get("/", async (req,res) => {
    const [professores] = await db.execute("SELECT * FROM professor")
    return res.json(professores)
})

router.post("/", async (req,res) => {
    const {nome, especialidade} = req.body
    if(!nome || !especialidade){
        return res.status(400).json({error: "Nome e espesialidade são obrigatorios"})
    }
    if(nome.length < 3){
        return res.status(400).json({error: "Nome precisa ter mais de 2 caracteres"})
    }
    const [resultado] = await db.execute(
        "INSERT INTO professor(nome, especialidade) VALUES (?, ?)",
        [nome, especialidade]
    )
    return res.status(201).json({id: resultado.insertId, nome, especialidade})
})

module.exports = router