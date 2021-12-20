import express, { json } from 'express';
import cors from 'cors';
import testController from './controllers/test.controller.js';

const app = express();

const corsOptions = {
  origin: 'http://localhost:4200',
};

const PORT = process.env.PORT || 5000;

app.use(cors(corsOptions));
// parse request of content-type - application/json
app.use(json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// routes
app.use('/test', testController);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
