import { User } from "../users";

export const sortUsersDesc = (users: User[]) => {
  const newUsers = JSON.parse(JSON.stringify(users)) as User[];

  return newUsers.sort(compareUsers).reverse();
};

const compareUsers = (userA: User, userB: User) => {
  const scoreCompare = (userA.topScore ?? 0) - (userB.topScore ?? 0);

  if (scoreCompare === 0) {
    const nameCompare = userB.name.localeCompare(userA.name);
    return nameCompare;
  }

  return scoreCompare;
};
