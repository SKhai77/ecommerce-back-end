// Import the necessary modules
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: Product, // Include associated Products
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: Product, // Include associated Products
    });

    if (!category) {
      res.status(400).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
  const updateCategory = await Category.update(req.body, {
    where: {
      id: req.params.id
    },
  });

  res.status(200).json(updateCategory);
} catch (err) {
  res.status(400).json(err);
}
});

// Delete a category by its `id` value
router.delete('/:id', async (req, res) => {
try {
  const deleteCategory = await Category.destroy(req.body, {
    where: {
      id: req.params.id
    }
  });

  res.status(200).json(deleteCategory);
} catch (err) {
  res.status(400).json(err);
}
});

// Export the defined routes
module.exports = router;
