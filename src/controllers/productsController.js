import testProductModel from '../models/testProductModel'
import fs from 'fs'

async function create(req, res) {
  try {
    const { filename: image } = req.file

    const [name] = image.split('.')
    const filename = `${name}.jpg`

    await testProductModel.create({
      title: req.body.title,
      price: req.body.price,
      image: filename,
    })

    return res.status(201).send({ msg: 'Deu tudo erto, produto cadasrado' })
  } catch (error) {
    return res.status(400).send({ msg: 'ERRO, tudo cagado!!' })
  }
}

async function getAll(req, res) {
  try {
    const data = await testProductModel.find()

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function apagaImagem(req, res) {
  try {
    const filepath = `uploads/${req.body.image}`

    await fs.unlink(filepath, (error) => {
      if (!error) {
        console.log(false)
      } else {
        console.log('Erro ao deletar arquivo.')
      }
    })

    return res.status(200).send('ok')
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function delProduct(req, res) {
  try {
    await testProductModel.findByIdAndRemove(req.params.id)

    return res.status(201).send({ msg: 'Apagada o Producto' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

export default { create, getAll,delProduct, apagaImagem }
