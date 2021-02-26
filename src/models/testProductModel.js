import { model, Schema } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  image: {
    type: String,
  },
  price: Number,
})

export default model('testProductModel', schema)
