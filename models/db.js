const {Sequelize} = require("sequelize"); //importa o Sequelize para poder usar em outros arquivos

const sequelize = new Sequelize(
    "cadastro", //nome do banco de dados
    "root", // nome do usuário do banco de dados
    "1234", // senha do usuário do banco de dados
    {
        host: "localhost", // endereço do servidor do banco de dados
        dialect: "mysql" // tipo de banco de dados
    }
);
//promessa em funções assíncronas
sequelize.authenticate().then((function() { 
    console.log("Conexão com o banco de dados realizada com sucesso!"); //mensagem para mostrar que a conexão foi realizada com sucesso
})).catch((function(erro) {
    console.log("Erro ao conectar com o banco de dados: " + erro); //mensagem para mostrar que houve um erro ao conectar com o banco de dados
}));

//NECESSARIO EXPORTAR O ARQUIVO PARA CONSEGUIR USAR O SEQUELIZE EM OUTROS ARQUIVOS
module.exports = {
    Sequelize: Sequelize, //exporta o Sequelize para poder usar em outros arquivos
    sequelize: sequelize //exporta a conexão com o banco de dados para poder usar em outros arquivos
}