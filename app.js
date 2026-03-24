const express = require('express');
const app = express(); //passa o express importado para dentro de uma constante



//criação de rota principal
app.get("/", function(req, res) { //função para criar a rota principal -- estrutura base
    res.send("Welcome to site"); //resposta para a rota principal
});

app.get("/artigos", function(req, res) { //função para criar a rota principal -- estrutura base
    res.send("Todos os artigos"); //resposta para a rota principal
});
//rota com parâmetro
app.get("/artigos/:id", function(req, res) { //função para criar a rota principal -- estrutura base
   if(req.params.id=="1"){
       res.send("Como criar apps flutter");
   }
   else if(req.params.id=="2"){
       res.send("Como criar apps react native");
   }
    else if(req.params.id=="3"){
       res.send("Como criar apps xamarin");
   }
    else{
        res.send("Artigo não encontrado");
    }

});

app.get("/artigos", function(req, res) { //função para criar a rota principal -- estrutura base
    res.send("Esta é a página de artigos"); //resposta para a rota principal
});

app.get("/comentarios", function(req, res) { //função para criar a rota principal -- estrutura base
    res.send("Esta é a página de comentários"); //resposta para a rota principal
});
app.listen(8081, function() { //função para ouvir a porta 8081 -- estrutura base 
    console.log("Servidor rodando na porta 8081"); //mensagem para mostrar que o servidor está rodando
});