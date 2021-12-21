import Category from '../models/category.model.js';
import Device from '../models/device.model.js';

const isBodyValid = async (body, res) => {
  if (!body.color.trim()) {
    res.status(400);
    res.send({
      message: 'Color must not be empty!',
    });
    return false;
  }

  if (!body.color.match(/^[a-zA-Z]*$/g)) {
    res.status(400);
    res.send({
      message: 'Color must have only letters!',
    });
    return false;
  }

  if (body.partNumber < 0) {
    res.status(400);
    res.send({
      message: 'Part Number must be above 0!',
    });
    return false;
  }

  const category = await Category.findByPk(body.categoryId);
  if (!category) {
    res.status(400);
    res.send({
      message: 'Category does not exist!',
    });
    return false;
  }

  return true;
};

const getAll = async (_req, res) => {
  const devices = await Device.findAll({
    include: [{
      model: Category,
    }],
  });

  res.send(devices);
};

const create = async (req, res) => {
  if (!await isBodyValid(req.body, res)) {
    return;
  }
  Device.create({
    categoryId: req.body.categoryId,
    color: req.body.color,
    partNumber: req.body.partNumber,
  }).then((newDevice) => {
    Device.findByPk(newDevice.id, {
      include: [{
        model: Category,
      }],
    }).then((device) => {
      res.send(device);
    }).catch(() => res.sendStatus(500));
  }).catch(() => res.sendStatus(400));
};

const remove = async (req, res) => {
  const { id } = req.params;
  Device.destroy({
    where: {
      id,
    },
  }).then(() => res.send({
    message: 'Deleted with success',
  }));
};

export default { getAll, create, remove };
