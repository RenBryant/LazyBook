// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

Product.belongsToMany(ProductTag, {
  foreignKey: 'product_id',
  through: {model: ProductTag, unique: false},
});

Tag.belongsToMany(ProductTag, {
  foreignKey: 'tagt_id',
  through: {model: ProductTag, unique: false},
});

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
