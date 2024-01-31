/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import { database } from '../shared/database/connection.js';

export const getLastConcursoLotofacil = async () => {
  const [rows, fields] = await database.execute('SELECT * FROM lotofacil_resultados ORDER BY concurso DESC LIMIT 1');

  const result = rows[0] ? rows[0] : { concurso: 0 };
  return result;
};

export const geConcursoLotofacil = async (concursoNumber) => {
  const [rows, fields] = await database.execute('SELECT * FROM lotofacil_resultados WHERE concurso = ?', [concursoNumber]);

  const result = rows[0] ? rows[0] : { concurso: 0 };
  return result;
};

export const saveLotofacil = (concurso) => {
  database.query('INSERT INTO lotofacil_resultados SET ?', concurso, (error, results, fields) => {
    if (error) throw error;
  });
};

export const saveLotofacilTest = (testResult) => {
  database.query('INSERT INTO test_resultados SET ?', testResult, (error, results, fields) => {
    if (error) throw error;
  });
};

export const saveCombination = (combinacao) => {
  database.query('INSERT INTO lotofacil_combinacoes SET ?', combinacao, (error, results, fields) => {
    if (error) throw error;
  });
};

export const getMostdrawnNumbers = async () => {
  const [rows, fields] = await database.execute(
    `SELECT numero, count(*) total FROM (
      select
      bola_1 as numero from lotofacil_resultados
      union all
      SELECT bola_2 as numero2 from lotofacil_resultados
      union all
      SELECT bola_3 as numero3 from lotofacil_resultados
      union all
      SELECT bola_4 as numero4 from lotofacil_resultados
      union all
      SELECT bola_5 as numero5 from lotofacil_resultados
      union all
      SELECT bola_6 as numero6 from lotofacil_resultados
      union all
      SELECT bola_7 as numero7 from lotofacil_resultados
      union all
      SELECT bola_8 as numero8 from lotofacil_resultados
      union all
      SELECT bola_9 as numero9 from lotofacil_resultados
      union all
      SELECT bola_10 as numero10 from lotofacil_resultados
      union all
      SELECT bola_11 as numero11 from lotofacil_resultados
      union all
      SELECT bola_12 as numero12 from lotofacil_resultados
      union all
      SELECT bola_13 as numero13 from lotofacil_resultados
      union all
      SELECT bola_14 as numero14 from lotofacil_resultados
      union all
      SELECT bola_15 as numero15 from lotofacil_resultados
      ) d
      GROUP BY numero
      ORDER BY total DESC;`,
  );

  return rows;
};

export const getMostdrawnNumbersThisYear = async () => {
  const [rows, fields] = await database.execute(
    `SELECT numero, count(*) total FROM (
      select
      bola_1 as numero from lotofacil_resultados WHERE YEAR(data_sorteio) = YEAR(CURRENT_DATE())
      union all
      SELECT bola_2 as numero2 from lotofacil_resultados WHERE YEAR(data_sorteio) = YEAR(CURRENT_DATE())
      union all
      SELECT bola_3 as numero3 from lotofacil_resultados WHERE YEAR(data_sorteio) = YEAR(CURRENT_DATE())
      union all
      SELECT bola_4 as numero4 from lotofacil_resultados WHERE YEAR(data_sorteio) = YEAR(CURRENT_DATE())
      union all
      SELECT bola_5 as numero5 from lotofacil_resultados WHERE YEAR(data_sorteio) = YEAR(CURRENT_DATE())
      union all
      SELECT bola_6 as numero6 from lotofacil_resultados WHERE YEAR(data_sorteio) = YEAR(CURRENT_DATE())
      union all
      SELECT bola_7 as numero7 from lotofacil_resultados WHERE YEAR(data_sorteio) = YEAR(CURRENT_DATE())
      union all
      SELECT bola_8 as numero8 from lotofacil_resultados WHERE YEAR(data_sorteio) = YEAR(CURRENT_DATE())
      union all
      SELECT bola_9 as numero9 from lotofacil_resultados WHERE YEAR(data_sorteio) = YEAR(CURRENT_DATE())
      union all
      SELECT bola_10 as numero10 from lotofacil_resultados WHERE YEAR(data_sorteio) = YEAR(CURRENT_DATE())
      union all
      SELECT bola_11 as numero11 from lotofacil_resultados WHERE YEAR(data_sorteio) = YEAR(CURRENT_DATE())
      union all
      SELECT bola_12 as numero12 from lotofacil_resultados WHERE YEAR(data_sorteio) = YEAR(CURRENT_DATE())
      union all
      SELECT bola_13 as numero13 from lotofacil_resultados WHERE YEAR(data_sorteio) = YEAR(CURRENT_DATE())
      union all
      SELECT bola_14 as numero14 from lotofacil_resultados WHERE YEAR(data_sorteio) = YEAR(CURRENT_DATE())
      union all
      SELECT bola_15 as numero15 from lotofacil_resultados WHERE YEAR(data_sorteio) = YEAR(CURRENT_DATE())
      ) d
      GROUP BY numero
      ORDER BY total DESC;`,
  );

  return rows;
};

export const getMostdrawnWith = async (numero) => {
  const [rows, fields] = await database.execute(
    `SELECT numero, count(*) total FROM (
      select
      bola_1 as numero from lotofacil_resultados
      union all
      SELECT bola_2 as numero2 from lotofacil_resultados
      union all
      SELECT bola_3 as numero3 from lotofacil_resultados
      union all
      SELECT bola_4 as numero4 from lotofacil_resultados
      union all
      SELECT bola_5 as numero5 from lotofacil_resultados
      union all
      SELECT bola_6 as numero6 from lotofacil_resultados
      union all
      SELECT bola_7 as numero7 from lotofacil_resultados
      union all 
      SELECT bola_8 as numero8 from lotofacil_resultados
      union all
      SELECT bola_9 as numero9 from lotofacil_resultados
      union all
      SELECT bola_10 as numero10 from lotofacil_resultados
      union all
      SELECT bola_11 as numero11 from lotofacil_resultados
      union all
      SELECT bola_12 as numero12 from lotofacil_resultados
      union all
      SELECT bola_13 as numero13 from lotofacil_resultados
      union all
      SELECT bola_14 as numero14 from lotofacil_resultados
      union all
      SELECT bola_15 as numero15 from lotofacil_resultados
      ) d
      GROUP BY numero
      ORDER BY total DESC;`,
  );

  return rows;
};
