const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    email: String,
    username: String,
    password: String,
    confirmed: {
      type: Boolean,
      default: false
    },
    role: {
      type: String,
      enum: ['guest', 'admin'],
      default: 'guest'
    },
    image: {
      type: String,
      default: 'https://i.stack.imgur.com/34AD2.jpg'
    },
    googleId: String,
    cart: [{
      product: {type: Schema.Types.ObjectId, ref: "Product"},
      qty: {type: Number, default: 1}
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('User', userSchema);
