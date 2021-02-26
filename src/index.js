import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './routes'
import path from 'path'
import mongoose from 'mongoose'

dotenv.config()

mongoose.connect(process.env.DATABASE_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})

const api = express()

const { PORT } = process.env

api.use(express.json())
api.use(cors())
api.use('/', route)

api.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

api.listen(PORT, () => {
  console.log(`Entrou na API on PORT: ${PORT}`)
})

export default api
