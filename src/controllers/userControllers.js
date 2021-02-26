import testModel from '../models/testModel'
import md5 from 'md5'

async function getAll(req, res) {
  try {
    const data = await testModel.find()

    return res.status(201).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function getById(req, res) {
  try {
    const data = await testModel.findById(req.params.id)

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function getByName(req, res) {
  try {
    const data = await testModel.findOne({ name: req.body.name })

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function create(req, res) {
  try {
    await testModel.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password, process.env.GLOBAL_SALTKEY),
    })

    return res.status(201).send({ msg: 'Deu tudo erto!!' })
  } catch (error) {
    return res.status(400).send({ msg: 'ERRO, tudo cagado!' })
  }
}

async function Update(req, res) {
  try {
    await testModel.findByIdAndUpdate(req.params.id, {
      $set: {
        name: req.body.name,
        email: req.body.email,
      },
    })

    return res.status(201).send({ msg: 'Todo Editado!!' })
  } catch (error) {
    return res.status(400).send({ msg: 'ERRO, Tudo Cagado!!' })
  }
}

async function Remover(req, res) {
  try {
    await testModel.findByIdAndRemove(req.params.id)

    return res.status(201).send({ msg: 'Tudo apagado!' })
  } catch (error) {
    return res.status(400).send({ msg: 'ERRO, tudo cagado!' })
  }
}

export default { getAll, Update, getByName, Remover, getById, create }
