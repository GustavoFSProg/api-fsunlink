import { Router } from 'express'
import userController from './controllers/userControllers'
import productsController from './controllers/productsController'
import multer from 'multer'
import uploadConfig from '../src/config/uploadConfig'

const upload = multer(uploadConfig)

const route = new Router()

// eslint-disable-next-line no-alert
route.get('/', userController.getAll)
route.get('/getById/:id', userController.getById)
route.get('/getByName', userController.getByName)
route.post('/register', userController.create)
route.post(
  '/productRegister',
  upload.single('image'),
  productsController.create
)

route.post('/delImage', productsController.apagaImagem)

route.get('/product', productsController.getAll)

route.put('/update/:id', userController.Update)
route.delete('/delProduct/:id', productsController.delProduct)
route.delete('/del/:id', userController.Remover)

export default route
