import mongoose, { Schema } from 'mongoose'

const ProductSchema = new Schema({
  name:        { type: String, required: true, trim: true, maxlength: 200 },
  slug:        { type: String, required: true, unique: true, lowercase: true },
  description: { type: String, maxlength: 2000 },
  category:    { type: String, required: true, enum: ['Engine','Brakes','Electrical','Body','Suspension','Tyres','Other'] },
  brand:       { type: String },
  price:       { type: Number, min: 0 },
  sku:         { type: String, unique: true, sparse: true },
  images:      [{ url: String, alt: String }],
  inStock:     { type: Boolean, default: true },
  featured:    { type: Boolean, default: false },
}, { timestamps: true })

ProductSchema.index({ category: 1, inStock: 1 })
ProductSchema.index({ name: 'text', description: 'text' })

export default mongoose.model('Product', ProductSchema)