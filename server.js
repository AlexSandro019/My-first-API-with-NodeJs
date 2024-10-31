import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json()) //Garante a utilizacao do JSON

app.post('/users', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    //users.push(req.body) //puxei a requisicao do users
    
    res.status(201).send(req.body) //confirmei que deu certo

})

app.get('/users/', async (req, res) => {

const users = await prisma.user.findMany()

    res.status(200).json(users) //A resposta vem do JSON no thunder

}) //Rota de lisstagem, request/response perguntar e responder

app.put('/users/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
})

app.delete('/users/:id', async (req, res) => {
    
    await prisma.user.delete({
        where: {
            id: req.params.id,
        },
    })
    
    res.status(200).json({ message: "Usuário deletado com sucesso!"})
})

app.listen(3000)

/*OBJETIVOS 

Criar API de usuários

-Criar um usuário
-Listar todos os usuários
-Editar um usuário
-Deletar um usuário
*/

/*
1) Tipo de rota / Método HTTP
2)Endereço
www.algumacoisa.com/users

alexzinxz7
batata121212
*/