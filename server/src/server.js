import cors from 'cors';
import express, { json } from 'express';
import categoryController from './controllers/category.controller.js';
import deviceController from './controllers/device.controller.js';

const app = express();

const corsOptions = {
  origin: ['http://localhost:4200', 'http://d1phewb3ogwbfl.cloudfront.net'],
  methods: 'GET, POST, DELETE, OPTIONS',
};

const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

app.use(cors(corsOptions));
// parse request of content-type - application/json
app.use(json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// routes
app.use('/category', categoryController);
app.use('/device', deviceController);

app.listen(PORT, HOSTNAME, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
