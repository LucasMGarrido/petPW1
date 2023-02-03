const router = require("express").Router()
const autenticacaoMiddleware = require('../middleware/autenticacao')
const atendimentoController = require("../controller/atendimentoController")

router.route('/atendimento').post(/*autenticacaoMiddleware,*/ (req, res) => atendimentoController.create(req, res))
router.route('/atendimento').get(/*autenticacaoMiddleware,*/ (req, res) => atendimentoController.read(req, res))
router.route('/atendimento/:id').get(/*autenticacaoMiddleware,*/ (req, res) => atendimentoController.readOne(req, res))
router.route('/atendimento/:id').delete(/*autenticacaoMiddleware,*/ (req, res) => atendimentoController.delete(req, res))
router.route('/atendimento/:id').patch(/*autenticacaoMiddleware,*/ (req, res) => atendimentoController.update(req, res))

module.exports = router