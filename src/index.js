import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const api = express()

api.use(express.json())
ap.use(cors())

const { PORT } = process.env

api.listem(PORT, () => console.log(`API rodando on port: ${PORT}`))

export default api
