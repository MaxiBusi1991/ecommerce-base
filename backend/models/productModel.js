import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minLength: 2,
      maxLength: 50
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      minLength: 2,
      maxLength: 50
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50
    },
    category: {
      type: String,
      
      minLength: 2,
      maxLength: 50
    },
    description: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 100
    },
    price: {
      type: Number,
      required: true,
      min: 0.1,
      max: 10000000000000
    },
    countInStock: {
      type: Number,
      required: true,
      max: 10000000000000
    },
    rating: {
      type: Number,
      required: true,
    },
    numReviews: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model('Product', productSchema);;
export default Product;