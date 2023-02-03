const router = require("express").Router()
const autenticacaoMiddleware = require('../middleware/autenticacao')
const petController = require("../controller/petController")

router.route('/pet').post(/*autenticacaoMiddleware,*/ (req, res) => petController.create(req, res))
router.route('/pet').get(/*autenticacaoMiddleware,*/ (req, res) => petController.read(req, res))
router.route('/pet/:id').delete(/*autenticacaoMiddleware,*/ (req, res) => petController.delete(req, res))
router.route('/pet/:id').put(/*autenticacaoMiddleware,*/ (req, res) => petController.update(req, res))

module.exports = router

