const router = require("express").Router()

const userController = require("../controller/userController")

router.route('/signup').post((req, res) => userController.create(req, res))
router.route('/authenticate').post((req, res) => userController.authenticate(req, res))
router.route('/signup').get((req, res) => userController.cadastro(req, res))
router.route('/signin').get((req, res) => userController.login(req, res))

module.exports = router