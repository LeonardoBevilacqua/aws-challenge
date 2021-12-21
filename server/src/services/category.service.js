import Category from '../models/category.model.js';

const isBodyValid = (body, res) => {
  if (!body.name.trim()) {
    res.status(400);
    res.send({
      message: 'Name must not be empty!',
    });
    return false;
  }

  return true;
};

const getAll = async (_req, res) => {
  const categories = await Category.findAll();

  res.send(categories);
};

const create = (req, res) => {
  if (!isBodyValid(req.body, res)) {
    return;
  }
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
  }).then(() => res.send({
    message: 'Deleted with success',
  }));
};

export default { getAll, create, remove };
