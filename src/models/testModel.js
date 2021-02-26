import { model, Schema } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: String,
})

export default model('testModel', schema)
