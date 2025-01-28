/**
 * Sorts an array of scores in descending order.
 *
 * @param {number[]} scores - An array of scores to sort.
 * @returns {number[]} A new array of scores sorted in descending order.
 */
export const sortScoresDesc = (scores: number[]): number[] => {
  const newUsers = JSON.parse(JSON.stringify(scores)) as number[];

  return newUsers.sort(compareScores).reverse();
};

/**
 * Compares two scores for sorting.
 *
 * @param {number} scoreA - The first score to compare.
 * @param {number} scoreB - The second score to compare.
 * @returns {number} The difference between scoreA and scoreB.
 */
const compareScores = (scoreA: number, scoreB: number): number => {
  const scoreCompare = scoreA - scoreB;

  return scoreCompare;
};
