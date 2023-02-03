const router = require("express").Router()
const autenticacaoMiddleware = require('../middleware/autenticacao')
const responsavelController = require("../controller/responsavelController")

router.route('/responsavel').post(/*autenticacaoMiddleware,*/ (req, res) => responsavelController.create(req, res))
router.route('/responsavel').get(/*autenticacaoMiddleware,*/ (req, res) => responsavelController.read(req, res))
router.route('/responsavel/:id').put(/*autenticacaoMiddleware,*/ (req, res) => responsavelController.update(req, res))
router.route('/responsavel/:id').delete(/*autenticacaoMiddleware,*/ (req, res) => responsavelController.delete(req, res))

module.exports = router