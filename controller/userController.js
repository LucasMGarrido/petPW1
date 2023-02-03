const { User } = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()


function geradorDeToken(params ={}) {
    return jwt.sign(params , process.env.SECRET, {
        expiresIn: 86400,
    })
}

const userController = {

    cadastro: async(req, res) =>{
        res.render('../views/cadastro.ejs')
    },

    login: async(req, res) =>{
        res.render('../views/login.ejs')
    },

    create: async (req, res) => {
    const { email } = req.body
        try {
            if(await User.findOne({email}))
                return res.status(400).send({error: 'Usuário já existe'})

           const user = await User.create(req.body)

            res.status(201).json({msg:"User criado com sucesso!", 
            user,
            token: geradorDeToken({ id: user._id}),
            })
        } catch (error) {
            res.status(400).send({error: 'Cadastro de usuário falhou.'})
            console.log(`ERRO: ${error}`)
        }
    },
    authenticate: async (req, res)=>{
        const {email, senha} = req.body
        const user = await User.findOne({email}).select('+senha')

        if(!user){
            return res.status(400).send({error: 'Usuário não encontrado.'})
        }

        const userExist = await bcrypt.compare(senha, user.senha)

        if(!userExist){
            return res.status(400).send({error: 'Senha Inválida'})
        }

        const token= geradorDeToken({ id: user._id})
        const tokenBearer = `Bearer ${token}`;

        res.cookie('token', tokenBearer, { maxAge: 3600000 }); // 1h
        res.set('Authorization', tokenBearer);

        req.headers['Authorization'] = token


        res.status(200).send({
            user, 
            token: token,
        })
    }
}

module.exports = userController