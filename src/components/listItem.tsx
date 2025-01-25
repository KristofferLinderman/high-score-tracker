import { Box } from "@chakra-ui/react";
import React from "react";
import { User } from "../users";

type ListItemProps = {
  user: User;
  onClick: (user: User) => void;
};

export const ListItem = ({ user, onClick }: ListItemProps) => {
  const { name, topScore } = user;
  return (
    <Box
      display={"flex"}
      gap={2}
      onClick={() => onClick(user)}
      cursor="pointer"
    >
      <span>{name}</span>
      <span>{topScore}</span>
    </Box>
  );
};
