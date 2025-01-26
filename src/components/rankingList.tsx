import { H2 } from "@northlight/ui";
import React from "react";
import { RankListItem } from "./rankListItem";
import { User } from "../users";

type RankingListProps = {
  users: User[];
  onClick: (user: User) => void;
};

export const RankingList = ({ onClick, users }: RankingListProps) => {
  return (
    <>
      <H2>Current Ranking</H2>
      {users.map((user, index) => (
        <RankListItem
          key={user._id}
          rankIndex={++index}
          user={user}
          onClick={onClick}
        />
      ))}
    </>
  );
};
