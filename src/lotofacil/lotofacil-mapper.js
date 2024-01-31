/* eslint-disable import/extensions */
import { formataStringData } from '../shared/formatters/date.js';
import { realToDecimal } from '../shared/formatters/currency.js';

export const mapLotofacil = (result) => ({
  concurso: result.Concurso,
  data_sorteio: formataStringData(result['Data Sorteio']),
  bola_1: result.Bola1,
  bola_2: result.Bola2,
  bola_3: result.Bola3,
  bola_4: result.Bola4,
  bola_5: result.Bola5,
  bola_6: result.Bola6,
  bola_7: result.Bola7,
  bola_8: result.Bola8,
  bola_9: result.Bola9,
  bola_10: result.Bola10,
  bola_11: result.Bola11,
  bola_12: result.Bola12,
  bola_13: result.Bola13,
  bola_14: result.Bola14,
  bola_15: result.Bola15,
  ganhadores_15: result['Ganhadores 15 acertos'],
  rateio_15: realToDecimal(result['Rateio 15 acertos']),
  ganhadores_14: result['Ganhadores 14 acertos'],
  rateio_14: realToDecimal(result['Rateio 14 acertos']),
  ganhadores_13: result['Ganhadores 13 acertos'],
  rateio_13: realToDecimal(result['Rateio 13 acertos']),
  ganhadores_12: result['Ganhadores 12 acertos'],
  rateio_12: realToDecimal(result['Rateio 12 acertos']),
  ganhadores_11: result['Ganhadores 11 acertos'],
  rateio_11: realToDecimal(result['Rateio 11 acertos']),
  acumulado: realToDecimal(result['Acumulado 15 acertos']),
  arrecadacao_total: realToDecimal(result['Arrecadacao Total']),
  estimativa_proximo_premio: realToDecimal(result['Estimativa Prêmio']),
  acumulado_especial: realToDecimal(result['Acumulado sorteio especial Lotofácil da Independência']),
});

export const mapCombination = (combination) => ({
  bola_1: combination[0],
  bola_2: combination[1],
  bole_3: combination[2],
  bola_4: combination[3],
  bola_5: combination[4],
  bola_6: combination[5],
  bola_7: combination[6],
  bola_8: combination[7],
  bola_9: combination[8],
  bola_10: combination[9],
  bola_11: combination[10],
  bola_12: combination[11],
  bola_13: combination[12],
  bola_14: combination[13],
  bola_15: combination[14],
  tested: false,
});

export const mapTestResult = async (game, result) => {
  await game.sort((a, b) => b - a);

  return {
    bola_1: game[14],
    bola_2: game[13],
    bola_3: game[12],
    bola_4: game[11],
    bola_5: game[10],
    bola_6: game[9],
    bola_7: game[8],
    bola_8: game[7],
    bola_9: game[6],
    bola_10: game[5],
    bola_11: game[4],
    bola_12: game[3],
    bola_13: game[2],
    bola_14: game[1],
    bola_15: game[0],
    acertos_11: result[11].length,
    acertos_12: result[12].length,
    acertos_13: result[13].length,
    acertos_14: result[14].length,
    acertos_15: result[15].length,
  };
};
