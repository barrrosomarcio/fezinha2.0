/* eslint-disable import/extensions */
/* eslint-disable no-console */
import DotENV from 'dotenv';
import express from 'express';
import lotofacilRoutes from './lotofacil/lotofacil-routes.js';

DotENV.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/lotofacil', lotofacilRoutes);

const server = app.listen(process.env.PORT, () => console.debug(`Fezinha running on port [${process.env.PORT}]`));

export default server;
