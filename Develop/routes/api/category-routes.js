const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const infoCategory = await Category.findAll({
      include: [{model: Product}],
    })
    res.status(200).json(infoCategory);
  } catch (err) {res.status(500).json(err)}
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const infoCategory = await Category.findOne({
      where: {
        id: req.params.id,
      },
    })
    if (!infoCategory) {
      res.status(400).json({ message: 'Incorrect Credentials!' });
      return;
    }
    res.status(200).json(infoCategory);
  } catch (err) {res.status(500).json(err)}
  });

router.post('/', async (req, res) => {
  // create a new category
  try {
    const infoCategory = await Category.create({category_name: req.body.category_name });
    res.status(200).json(infoCategory);
  } catch (err) {res.status(500).json(err)}
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update({
      id: req.body.id,
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    });
    res.json(updateCategory)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deleteCategory)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
