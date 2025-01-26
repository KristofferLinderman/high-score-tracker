import { Box, Card, CardBody } from "@chakra-ui/react";
import React from "react";
import { User } from "../users";

type ListItemProps = {
  user: User;
  onClick: (user: User) => void;
  rankIndex: number;
};

export const RankListItem = ({ user, onClick, rankIndex }: ListItemProps) => {
  const { name, topScore } = user;
  return (
    <Card onClick={() => onClick(user)} cursor="pointer">
      <CardBody>
        <Box display="flex" gap={1}>
          <span>#{rankIndex}</span>-<span>{name}</span>
          <span>{topScore}</span>
        </Box>
      </CardBody>
    </Card>
  );
};
