const express = require("express")
const db = require("sqlite3").verbose
const cors = require("cors")

const app = express()
const PORT = 3000
app.use(cors())
app.use(express.json())

db.run(`CREATE TABLE IF NOT EXISTS livros(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT,
        autor TEXT,
        anoPublicacao INTEGER,
        genero TEXT,
        idioma TEXT,
        preco INTEGER
    )
`)

app.post("/livros", async (req, res) => {
    console.log(req.body);

    let titulo = req.body.titulo
    let autor = req.body.autor
    let anoPublicacao = req.body.anoPublicacao
    let genero = req.body.genero
    let idioma = req.body.idioma
    let preco = req.body.preco

    db.run(`INSERT INTO livros (titulo, autor, anoPublicao, genero, idioma, preco) VALUES (?, ?, ?, ?, ?, ?)`,
        [titulo, autor, anoPublicao, genero, idioma, preco],
        function(){
            res.json({
                id: this.lastID,
                titulo,
                autor,
                anoPublicacao,
                genero,
                idioma,
                preco
            })
        }

    )
})


app.get("/livros", (req, res) => {
    db.all(`SELECT id, titulo, autor, anoPublicacao, genero, idioma, preco FROM livros`, [], (err, rows) =>{
        res.json(rows)
    })
})


app.get("/liros/:id", (req, res) => {
    let idLivro = req.params.id;

    db.get(`SELECT id, titulo, autor, anoPublicao, genero, idioma, preco FROM livros
        WHERE id = ?`,
    [idLivro], (err, result) => {
        if(result){
            res.json(result)
        } else {
            res.status(404).json({
                "message" : "Livro não encontrado."
            })
        }
    })
})



app.delete("/livros/:id", (req, res) => {
    let idUsuario = req.params.id

    db.run(`DELETE FROM livros WHERE id = ?`, 
    [idUsuario], function(){

        if(this.changes === 0){
            res.status(404).json({
                "message" : "Livro não encontrado"
            })
        }

        res.json({
            "message" : "Livro deletado"
        })
    })    
})



app.put("/usuarios/:id", async (req, res) => {
    let idUsuario = req.params.id

    let titulo = req.body.titulo
    let autor = req.body.autor
    let anoPublicacao = req.body.anoPublicacao
    let genero = req.body.genero
    let idioma = req.body.idioma
    let preco = req.body.preco

    db.run(`UPDATE usuarios SET titulo = ?, autor = ?, anoPublicacao = ?, genero = ?, idioma = ?, preco = ? 
        WHERE id = ?`, [titulo, autor, anoPublicacao, genero, idioma, preco],
        function(){
            res.json({
                "message" : "Livro atualizado com sucesso"
            })
        })
})

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));