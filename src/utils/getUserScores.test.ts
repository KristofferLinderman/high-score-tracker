import { describe, it, expect } from "vitest";
import { getUserScores } from "./getUserScores"; // Adjust the import path as needed
import { Score } from "../scores";
import { User } from "../users";

describe("getUserScores", () => {
  it("should return an empty array when no scores match the user", () => {
    const user: User = { _id: 1, name: "Alice" };
    const scores: Score[] = [
      { score: 10, userId: 2, name: "Bob" },
      { score: 20, userId: 3, name: "Charlie" },
    ];

    const result = getUserScores(user, scores);
    expect(result).toEqual([]);
  });

  it("should return scores matching the user by userId", () => {
    const user: User = { _id: 1, name: "Alice" };
    const scores: Score[] = [
      { score: 10, userId: 1 },
      { score: 20, userId: 2 },
    ];

    const result = getUserScores(user, scores);
    expect(result).toEqual([10]);
  });

  it("should return scores matching the user by name", () => {
    const user: User = { _id: 1, name: "Alice" };
    const scores: Score[] = [
      { score: 15, name: "Alice" },
      { score: 25, name: "Bob" },
    ];

    const result = getUserScores(user, scores);
    expect(result).toEqual([15]);
  });

  it("should return all scores matching the user by userId or name", () => {
    const user: User = { _id: 1, name: "Alice" };
    const scores: Score[] = [
      { score: 10, userId: 1, name: "Alice" },
      { score: 15, name: "Alice" },
      { score: 20, userId: 2, name: "Bob" },
      { score: 25, userId: 1 },
    ];

    const result = getUserScores(user, scores);
    expect(result).toEqual([10, 15, 25]);
  });
});
