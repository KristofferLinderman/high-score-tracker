import { isScoreWithId, type Score } from "../scores";
import { type User } from "../users";

export const getUsersFromScores = (users: User[], scores: Score[]) => {
  const newUsers = JSON.parse(JSON.stringify(users)) as User[];

  scores.forEach((scoreElem) => {
    const { score } = scoreElem;
    const user = getUser(newUsers, scoreElem);

    if (user) {
      user.topScore = score > (user.topScore ?? 0) ? score : user.topScore;
    } else {
      newUsers.push(createNewUser(newUsers.length + 1, score, scoreElem.name));
    }
  });

  return newUsers;
};

const getUser = (users: User[], score: Score): User | undefined => {
  const user = isScoreWithId(score)
    ? users.find((user) => user._id === score.userId)
    : users.find((user) => user.name === score.name);

  return user;
};

const createNewUser = (userId: number, topScore: number, name?: string) => {
  return {
    _id: userId,
    name: name ?? `User${userId}`,
    topScore,
  };
};
