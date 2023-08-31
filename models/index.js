// Import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // Establishes the relationship between Product and Category
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // Establishes the relationship between Category and Product
  onDelete: 'CASCADE', // When a category is deleted, its associated products will be deleted
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id', // Establishes the relationship between Product and Tag with ProductTag
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id', // Establishes the relationship between Tag and Product with ProductTag
});

// Export all the models
module.exports = {
  Product,
  Category,
  ProductTag,
  Tag,  
};
