import { Score } from "../scores";
import { User } from "../users";

/**
 * Returns all scores for the specified user, based on user name or user Id
 *
 * @param {User} user The user whose scores we want
 * @param {Score[]} scores The array of scores to search in
 * @returns {number[]} An array of numbers representing the scores associated with the user.
 */
export const getUserScores = (user: User, scores: Score[]): number[] => {
  const userScores: number[] = [];

  scores.forEach((scoreElem) => {
    if (scoreElem.name === user.name || scoreElem.userId === user._id) {
      userScores.push(scoreElem.score);
    }
  });

  return userScores;
};
