import { describe, it, expect } from "vitest";
import { getUsersFromScores } from "./getUsersFromScores"; // Adjust the import path as needed
import { Score } from "../scores";
import { User } from "../users";

describe("getUsersFromScores", () => {
  it.only("should update existing users with their top scores", () => {
    const users: User[] = [
      { _id: 1, name: "Alice", topScore: 50 },
      { _id: 2, name: "Bob", topScore: 60 },
    ];

    const scores: Score[] = [
      { score: 70, userId: 1 },
      { score: 80, userId: 2 },
    ];

    const result = getUsersFromScores(users, scores);
    expect(result).toEqual([
      { _id: 1, name: "Alice", topScore: 70 },
      { _id: 2, name: "Bob", topScore: 80 },
    ]);
  });

  it("should add new users for scores with non-existent userId or name", () => {
    const users: User[] = [{ _id: 1, name: "Alice", topScore: 50 }];

    const scores: Score[] = [
      { score: 40, name: "Charlie" },
      { score: 60, userId: 2 },
    ];

    const result = getUsersFromScores(users, scores);
    expect(result).toEqual([
      { _id: 1, name: "Alice", topScore: 50 },
      { _id: 2, name: "Charlie", topScore: 40 },
      { _id: 3, name: "User3", topScore: 60 },
    ]);
  });

  it("should not update user topScore if the new score is lower", () => {
    const users: User[] = [{ _id: 1, name: "Alice", topScore: 70 }];

    const scores: Score[] = [{ score: 50, userId: 1 }];

    const result = getUsersFromScores(users, scores);
    expect(result).toEqual([{ _id: 1, name: "Alice", topScore: 70 }]);
  });
});
