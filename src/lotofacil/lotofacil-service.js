/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import { StatusCodes } from 'http-status-codes';
import {
  getLastConcursoLotofacil,
  saveLotofacil,
  getMostdrawnNumbers,
  getMostdrawnNumbersThisYear,
} from './lotofacil-db.js';
import { RESULTS } from './lotofacil-data.js';
import { generateCombinations, testCombination } from './lotofacil-functions.js';
import { mapLotofacil } from './lotofacil-mapper.js';

export const updateLotofacilResults = async (req, res) => {
  try {
    const lastConcurso = await getLastConcursoLotofacil();
    const filteredResults = RESULTS.filter(
      (resultado) => parseInt(resultado.Concurso, 10) > lastConcurso.concurso,
    );
    filteredResults.forEach(async (concurso) => {
      const formattedConcurso = mapLotofacil(concurso);
      await saveLotofacil(formattedConcurso);
    });

    return res.status(StatusCodes.OK).send();
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
  }
};

export const getLotofacilStats = async (req, res) => {
  try {
    const mostdrawnNumbers = await getMostdrawnNumbers();
    const mostdrawnNumbersThisYear = await getMostdrawnNumbersThisYear();
    return res.status(StatusCodes.OK).send({
      all_time: mostdrawnNumbers,
      this_year: mostdrawnNumbersThisYear,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
  }
};

export const testGame = async (req, res) => {
  try {
    const { concursos, game } = req.body;
    const result = await testCombination(concursos, game);
    return res.status(StatusCodes.OK).send(result);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
  }
};

export const generateAndTest = async (req, res) => {
  try {
    const { number_of_combinations, concursos } = req.body;
    const combinations = await generateCombinations(number_of_combinations);

    const output = [];

    for (let i = 0; i < combinations.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const result = await testCombination(concursos, combinations[i]);
      output.push({
        combinacao: combinations[i],
        resultado: result,
      });
    }
    return res.status(StatusCodes.OK).send(output);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
  }
};
