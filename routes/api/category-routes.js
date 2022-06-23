const router = require("express").Router();
const { Category, Product } = require("../../models");

// /API/CATEGORIES ENDPOINT

// GET ALL CATEGORIES
router.get("/", (req, res) => {
  Category.findAll({
    attributes: ["id", "category_name"],
    include: [
      {
        model: Product,
        attributes: ["product_name"],
      },
    ],
  })
    .then((categoryData) => res.json(categoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET ONE CATEGORY WITH CORRESPONDING PRODUCTS
router.get("/:id", (req, res) => {
  Category.findOne({
    attributes: ["id", "category_name"],
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        attributes: ["product_name"],
      },
    ],
  })
    .then((singleCategoryData) => res.json(singleCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// CREATE NEW CATEGORY
router.post("/", (req, res) => {
  Category.create(req.body, {
    id: req.body.id,
    category_name: req.body.category_name,
  })
    .then((newCategory) => res.status(200).json(newCategory))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// UPDATE CATEGORY
router.put("/:id", (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((categoryData) => {
      if (!categoryData) {
        res.status(404).json({ message: "No tag found with this id" });
        return;
      }
      res.json(categoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE CATEGORY
router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((productData) => {
      if (productData) {
        res.status(404).json({ message: "No product found with this id" });
        return;
      }
      res.json(productData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
