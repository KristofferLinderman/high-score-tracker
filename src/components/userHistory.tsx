import React from "react";
import { User } from "../users";
import { Box } from "@chakra-ui/react";
import { H2 } from "@northlight/ui";

export type UserHistoryItem = {
  user: User;
  scores: number[];
};

type UserHistoryProps = {
  userHistoryItem: UserHistoryItem;
};

export const UserHistory = ({ userHistoryItem }: UserHistoryProps) => {
  return (
    <Box>
      <H2>{userHistoryItem.user.name}'s scores:</H2>

      <Box display="grid">
        {userHistoryItem.scores.map((score, index) => (
          <span key={index}>{score}</span>
        ))}
      </Box>
    </Box>
  );
};
