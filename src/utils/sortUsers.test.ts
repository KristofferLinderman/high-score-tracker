import { describe, it, expect } from "vitest";
import { User } from "../users";
import { sortUsersDesc } from "./sortUsers";

describe("sortUsersDesc", () => {
  it("should sort users by topScore in descending order", () => {
    const users: User[] = [
      { _id: 1, name: "Alice", topScore: 50 },
      { _id: 2, name: "Bob", topScore: 60 },
      { _id: 3, name: "Charlie", topScore: 40 },
    ];

    const result = sortUsersDesc(users);
    expect(result).toEqual([
      { _id: 2, name: "Bob", topScore: 60 },
      { _id: 1, name: "Alice", topScore: 50 },
      { _id: 3, name: "Charlie", topScore: 40 },
    ]);
  });

  it("should sort users by name in alphabetical order when topScores are equal", () => {
    const users: User[] = [
      { _id: 1, name: "Alice", topScore: 50 },
      { _id: 2, name: "Charlie", topScore: 50 },
      { _id: 3, name: "Bob", topScore: 50 },
    ];

    const result = sortUsersDesc(users);
    expect(result).toEqual([
      { _id: 1, name: "Alice", topScore: 50 },
      { _id: 3, name: "Bob", topScore: 50 },
      { _id: 2, name: "Charlie", topScore: 50 },
    ]);
  });

  it("should handle an empty array", () => {
    const users: User[] = [];
    const result = sortUsersDesc(users);
    expect(result).toEqual([]);
  });

  it("should handle an array with one user", () => {
    const users: User[] = [{ _id: 1, name: "Alice", topScore: 100 }];

    const result = sortUsersDesc(users);
    expect(result).toEqual([{ _id: 1, name: "Alice", topScore: 100 }]);
  });

  it("should handle users with undefined topScores", () => {
    const users: User[] = [
      { _id: 1, name: "Alice" },
      { _id: 2, name: "Bob", topScore: 60 },
      { _id: 3, name: "Charlie" },
    ];

    const result = sortUsersDesc(users);
    expect(result).toEqual([
      { _id: 2, name: "Bob", topScore: 60 },
      { _id: 1, name: "Alice" },
      { _id: 3, name: "Charlie" },
    ]);
  });
});
