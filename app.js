// dependências do projeto
// npm install init
// npm install express
// npm install nodemon (tipo um live server)
// npm install ejs (criação de páginas -> por padrão, procura a pasta views)

//Importando Express 
const express = require('express')
// Importando os mockups.js
const noticias = require('./mockup.js')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('./views/public'))

// Criando primeiro rota
app.get('/', (req, res) => {
    res.render('home/index',{noticias: noticias.slice(0,3), title:'Home'}) // permite mostrar as noticias mais recentes
}) 

// Rota de Notícias
app.get('/noticias', (req, res) => {
    res.render('noticias/noticias', {noticias:noticias, title:'Noticias'})
}) 

// Rota da Notícia
app.get('/noticia', (req, res) => {
    // recuperar ID por get
    var id = req.query.id
    res.render('noticias/noticia', {noticia:noticias[id], title:'Noticia'})
}) 

// Rota do Admin
app.get('/admin',(req,res) => {
    res.render('admin/form_add_noticia', {title:'Formulário'})
})

app.listen(3000, () => {
    console.log('Escutando na porta 3000 com Express')
    console.log('Pression CTRL+C para encerrar servidor')
})

