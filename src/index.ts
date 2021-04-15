import 'reflect-metadata';
import express from 'express';

import './database/connect';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log('🔥 Server running on http://54.221.27.198:3000');
});
