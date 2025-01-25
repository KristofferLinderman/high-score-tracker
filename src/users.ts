export type User = {
  _id: number;
  name: string;
  topScore?: number;
};

export const users: User[] = [
  { _id: 1, name: "Jane" },
  { _id: 2, name: "Barry" },
  { _id: 3, name: "Kim" },
];
