var express = require('express');
var router = express.Router();

/* GET home page. */

let dataReturn = {
    "status": "error",
    "menssage": "Requisição Inválida",
    "data": null
};
function returnSuccess(menssage,data = null){
    dataReturn.status = 'success'
    dataReturn.menssage = menssage
    dataReturn.data = data
    return dataReturn
}

function returnError(menssage,data = null){
    dataReturn.status = 'Error'
    dataReturn.menssage = menssage
    dataReturn.data = data
    return dataReturn
}



    router.post('/', function (req, res, next) {
        const nome = req.body.nome
        const pwd = req.body.password

        if (nome === 'Kinder' && pwd === '123') {
            let dadosUsuario = "xablau"
            res.json(returnSuccess('Usuário Logado com Sucesso!', dadosUsuario))
        } else {
            res.json(returnError('Falha ao logar'))
        }

    });

module.exports = router;
