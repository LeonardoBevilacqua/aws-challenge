import express, { json } from 'express';
import cors from 'cors';

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

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
