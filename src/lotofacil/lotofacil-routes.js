/* eslint-disable import/extensions */
import { Router } from 'express';
import {
  getLotofacilStats,
  testGame,
  updateLotofacilResults,
  generateAndTest,
} from './lotofacil-service.js';

const route = Router();

route.get('/stats', getLotofacilStats);

route.post('/update-results', updateLotofacilResults);

route.post('/test', testGame);

route.post('/generate', generateAndTest);

export default route;
