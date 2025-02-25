export type Score = ScoreWithId | ScoreWithName;

type ScoreWithId = {
  score: number;
  userId: number;
  name?: string;
};

type ScoreWithName = {
  score: number;
  name: string;
  userId?: number;
};

export const isScoreWithId = (score: Score): score is ScoreWithId => {
  return (score as ScoreWithId).userId !== undefined;
};

export const scores: Score[] = [
  { userId: 1, score: 474 },
  { userId: 2, score: 592 },
  { userId: 1, score: 30 },
  { userId: 2, score: 48 },
  { userId: 2, score: 585 },
  { userId: 3, score: 465 },
  { userId: 1, score: 219 },
  { userId: 3, score: 974 },
  { userId: 3, score: 753 },
  { userId: 1, score: 988 },
  { userId: 3, score: 645 },
  { userId: 2, score: 53 },
  { userId: 3, score: 715 },
  { userId: 1, score: 626 },
  { userId: 3, score: 462 },
  { userId: 2, score: 210 },
  { userId: 1, score: 679 },
  { userId: 2, score: 742 },
  { userId: 1, score: 983 },
  { userId: 1, score: 163 },
  { userId: 3, score: 701 },
];
