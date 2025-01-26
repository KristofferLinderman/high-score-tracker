import { Box } from "@chakra-ui/react";
import { H2 } from "@northlight/ui";
import React from "react";
import { ListItem } from "./listItem";
import { User } from "../users";

type RankingListProps = {
  users: User[];
  onClick: (user: User) => void;
};

export const RankingList = ({ onClick, users }: RankingListProps) => {
  return (
    <Box>
      <H2>Current Ranking</H2>
      {users.map((user) => (
        <ListItem key={user._id} user={user} onClick={onClick} />
      ))}
    </Box>
  );
};
