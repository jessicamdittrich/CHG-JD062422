const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// /API/TAGS ENDPOINT

// GET ALL TAGS
router.get('/', (req, res) => {
  Tag.findAll({
    attributes: [
      'id',
      'tag_name',
    ],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        through: ProductTag, as: "products"
      },
    ]
  })
  .then(tagData => res.json(tagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// GET ONE TAG 
router.get('/:id', (req, res) => {
  Tag.findOne({
    attributes: [
      'id',
      'tag_name',
    ],
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        through: ProductTag, as: "products"
      },
    ]
  })
  .then(singleTagData => res.json(singleTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// CREATE NEW TAG
router.post('/', (req, res) => {
  Tag.create(req.body, {
    id: req.body.id,
    tag_name: req.body.tag_name,
})
  .then((newTag) => res.status(200).json(newTag))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// UPDATE TAG
router.put('/:id', (req, res) => {
    Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(tagData => {
        if (!tagData) {
          res.status(404).json({ message: 'No tag found with this id' });
          return;
        }
        res.json(tagData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// DELETE TAG
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(tagData => {
      if (tagData) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(tagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
