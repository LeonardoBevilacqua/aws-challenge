import Device from '../models/device.model.js';

const getAll = async (_req, res) => {
  const devices = await Device.findAll();

  res.send(devices);
};

const create = (req, res) => {
  if (!req.body.color.match(/^[a-zA-Z]*$/g)) {
    res.sendStatus(400);
    return;
  }

  if (req.body.partNumber < 0) {
    res.sendStatus(400);
    return;
  }

  Device.create({
    categoryId: req.body.categoryId,
    color: req.body.color,
    partNumber: req.body.partNumber,
  }).then((device) => res.send(device)).catch(() => res.sendStatus(400));
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
