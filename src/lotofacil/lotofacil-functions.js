/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import { geConcursoLotofacil, getLastConcursoLotofacil, saveLotofacilTest } from './lotofacil-db.js';
import { mapTestResult } from './lotofacil-mapper.js';

export const generateCombinations = (numberOfCombinations) => {
  function generateRandomCombination() {
    const combination = [];
    while (combination.length < 15) {
      const number = Math.floor(Math.random() * 25) + 1;
      if (!combination.includes(number)) {
        combination.push(number);
      }
    }
    return combination;
  }

  const randomCombinations = [];

  for (let i = 0; i < numberOfCombinations; i += 1) {
    const combination = generateRandomCombination();
    randomCombinations.push(combination);
  }

  return randomCombinations;
};

export const compareGames = (concurso, game) => {
  let acertos = 0;
  const {
    bola_1, bola_2, bola_3, bola_4, bola_5,
    bola_6, bola_7, bola_8, bola_9, bola_10,
    bola_11, bola_12, bola_13, bola_14, bola_15,
  } = concurso;

  game.forEach((number) => {
    if (
      [
        bola_1, bola_2, bola_3, bola_4, bola_5,
        bola_6, bola_7, bola_8, bola_9, bola_10,
        bola_11, bola_12, bola_13, bola_14, bola_15,
      ].includes(number)) {
      acertos += 1;
    }
  });

  return acertos;
};

export const testCombination = async (concursos, game) => {
  const result = {
    11: [],
    12: [],
    13: [],
    14: [],
    15: [],
  };
  const lastConcurso = await getLastConcursoLotofacil();

  for (let i = 0; i < concursos; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const concurso = await geConcursoLotofacil(lastConcurso.concurso - i);

    const acertos = compareGames(concurso, game);
    if (acertos > 10) {
      result[acertos].push(concurso.concurso);
    }
  }

  const dbTestPayload = await mapTestResult(game, result);
  await saveLotofacilTest(dbTestPayload);

  return result;
};
