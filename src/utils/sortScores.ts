export const sortScoresDesc = (scores: number[]) => {
  const newUsers = JSON.parse(JSON.stringify(scores)) as number[];

  return newUsers.sort(compareScores).reverse();
};

const compareScores = (scoreA: number, scoreB: number) => {
  const scoreCompare = scoreA - scoreB;

  return scoreCompare;
};
