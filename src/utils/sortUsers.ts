import { User } from "../users";

/**
 * Sorts an array of users in descending order based on their top scores.
 * If two users have the same top score, they are sorted by name in descending order.
 *
 * @param {User[]} users - An array of user objects to sort.
 * @returns {User[]} A new array of users sorted in descending order by top score and name.
 */
export const sortUsersDesc = (users: User[]): User[] => {
  const newUsers = JSON.parse(JSON.stringify(users)) as User[];

  return newUsers.sort(compareUsers).reverse();
};

/**
 * Compares two users based on top score for sorting. If top scores are equal, they are sorted alphabetically
 *
 * @param {User} userA - The first user to compare.
 * @param {User} userB - The second user to compare.
 * @returns {number} The difference between userA´s top score and userB's top score,
 *                   or diff. between names if top scores are equal
 * */
const compareUsers = (userA: User, userB: User): number => {
  const scoreCompare = (userA.topScore ?? 0) - (userB.topScore ?? 0);

  if (scoreCompare === 0) {
    const nameCompare = userB.name.localeCompare(userA.name);
    return nameCompare;
  }

  return scoreCompare;
};
