// IMPORTING MODULES
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// PRODUCT BELONGS TO CATEGORY
Product.belongsTo(Category);

// CATEGORIES HAVE MANY PRODUCTS
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// PRODUCTS BELONG TO MANY TAGS (PRODUCT TAG)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tags',
  foreignKey: 'product_id'
})

// TAGS BELONG TO MANY PRODUCTS (PRODUCT TAG)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'products',
  foreignKey: 'tag_id'
})

// EXPORTING MODULES
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
