import { Score } from "../scores";
import { User } from "../users";

export const getUserScores = (user: User, scores: Score[]) => {
  const userScores: number[] = [];

  scores.forEach((scoreElem) => {
    if (scoreElem.name === user.name || scoreElem.userId === user._id) {
      userScores.push(scoreElem.score);
    }
  });

  return userScores;
};
