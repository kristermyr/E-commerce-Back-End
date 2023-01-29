const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // finds all categories
  // be sure to include its associated Products
  //from activity 11 restful routes
  
    try {
      const categoryData = await Category.findAll({
        include: Product,
    });
      // 200 status code means the request is successful
      res.status(200).json(categoryData);
    } catch (err) {
      // 400 status code means the server could not understand the request
      res.status(400).json(err);
    }
  });

router.get('/:id',async (req, res) => {
  // finds one category by its `id` value
  // be sure to include its associated Products
    //from activity 12 restful routes
      try {
        const categoryData = await Category.findByPk({
          include: Product,
      });
      if (!userData) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
    });

//from activity 5 Create
router.post('/', (req, res) => {
  // creates a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then((newCategory) => {
    res.json(newCategory);
  })
  .catch((err) => {
    res.json(err);
  });
});
//from activity 8 update-delete
router.put('/:id', (req, res) => {
  // updates a category by its `id` value
  Category.update(req.body,{
    where:{
      id:req.params.id
    },
  })
  .then((newCategory) => {
    res.json(newCategory);
  })
  .catch((err) => {
    console.log(err);
    res.json(err);
  });
});

router.delete('/:id', (req, res) => {
  // deletes a category by its `id` value
  Category.destroy(req.body,{
    where:{
      id:req.params.id
    },
  })
  .then((deletedCategory) =>{
    res.json(deletedCategory);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
