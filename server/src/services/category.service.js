import Category from '../models/category.model.js';

const getAll = async (_req, res) => {
  const categories = await Category.findAll();

  res.send(categories);
};

const create = (req, res) => {
  Category.create({
    name: req.body.name,
  }).then((category) => res.send(category));
};

const remove = async (req, res) => {
  const { id } = req.params;
  Category.destroy({
    where: {
      id,
    },
  }).then(() => res.sendStatus(200));
};

export default { getAll, create, remove };
