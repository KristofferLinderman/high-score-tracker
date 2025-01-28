import { isScoreWithId, type Score } from "../scores";
import { type User } from "../users";

/**
 * Returns a new array of users with scores based on the provided array of scores
 *
 * @param {User[]} users - An array of existing user objects.
 * @param {Score[]} scores - An array of score objects to process.
 * @returns {User[]} A new array of users with updated top scores.
 */
export const getUsersFromScores = (users: User[], scores: Score[]): User[] => {
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

/**
 * Finds a user in the list based on the score's userId or name.
 *
 * @param {User[]} users - An array of user objects to search.
 * @param {Score} score - The score object containing user identification data.
 * @returns {User | undefined} The found user object or undefined if no user matches.
 */
const getUser = (users: User[], score: Score): User | undefined => {
  const user = isScoreWithId(score)
    ? users.find((user) => user._id === score.userId)
    : users.find((user) => user.name === score.name);

  return user;
};

/**
 * Creates a new user object, with a default name if none is provided
 *
 * @param {number} userId - The unique identifier for the new user.
 * @param {number} topScore - The top score for the new user.
 * @param {string} [name] - The name of the new user. Defaults to "User" followed by userId if not provided.
 * @returns {User} A new user object.
 */
const createNewUser = (
  userId: number,
  topScore: number,
  name?: string
): User => {
  return {
    _id: userId,
    name: name ?? `User${userId}`,
    topScore,
  };
};
