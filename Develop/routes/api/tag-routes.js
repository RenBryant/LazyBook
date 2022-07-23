const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const infoTag = await Tag.findAll({
      include: [{model: Product}],
    })
    res.status(200).json(infoTag);
  } catch (err) {res.status(500).json(err)}
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const infoTag = await Tag.findByPk(req.params.id, {
      include: [{model: Product}],
    })
    if (!infoTag) {
      res.status(400).json({ message: 'Incorrect Credentials!' });
      return;
    }
    res.status(200).json(infoTag);
  } catch (err) {res.status(500).json(err)}
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const infoTag = await Tag.create({tag_name: req.body.tag_name });
    res.status(200).json(infoTag);
  } catch (err) {res.status(500).json(err)}
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update({
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    });
    res.json(updateTag)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deleteTag)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
