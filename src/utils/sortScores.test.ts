import { describe, it, expect } from "vitest";
import { sortScoresDesc } from "./sortScores";

describe("sortScoresDesc", () => {
  it("should sort scores in descending order", () => {
    const scores = [10, 50, 30, 20, 40];
    const result = sortScoresDesc(scores);
    expect(result).toEqual([50, 40, 30, 20, 10]);
  });

  it("should handle an empty array", () => {
    const scores: number[] = [];
    const result = sortScoresDesc(scores);
    expect(result).toEqual([]);
  });

  it("should handle an array with one score", () => {
    const scores = [100];
    const result = sortScoresDesc(scores);
    expect(result).toEqual([100]);
  });

  it("should handle an array with duplicate scores", () => {
    const scores = [20, 20, 10, 30, 30];
    const result = sortScoresDesc(scores);
    expect(result).toEqual([30, 30, 20, 20, 10]);
  });
});
