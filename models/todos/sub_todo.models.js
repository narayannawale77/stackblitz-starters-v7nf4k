import mongoose from 'mongoose';

const subTodo = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    complete: {
      type: Boolean,
      default: false
    }
  }, {timestamps})

export const Subtodo = mongoose.model('Subtodo', Subtodo);