const db = require('../model/index')
const USER_MODEL = db.userModel;

exports.getAll = (req, res) => {
    USER_MODEL.findAll().then((data) => {
        return res.status(200).send(data)
    }).catch((err) => {
        return res.status(500).send({
            'message': 'houve um erro',
            'erro': err
        })
    })
}

exports.create = (req, res) => {
    const NOVO_USUARIO = {
        'nome': req.body.nome,
        'idade': req.body.idade
    }

    USER_MODEL.create(NOVO_USUARIO).then((data) => {
        return res.status(200).send(data)
    }).catch((err) => {
        return res.status(500).send({
            'message': 'houve um erro',
            'erro': err
        })
    })
}