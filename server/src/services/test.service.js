import Test from '../models/test.model.js';

const getAll = async (_req, res) => {
  const test = await Test.findAll();

  res.send(test);
};

export default { getAll };
