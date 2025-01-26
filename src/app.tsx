import React, { useEffect, useState } from "react";
import { Container, Box, VStack, HStack, H1, H2 } from "@northlight/ui";
import { ExcelDropzone, ExcelRow } from "./excel-dropzone";
import { getUsersFromScores } from "./utils/getUsersFromScores";
import { type Score, scores as initialScore } from "./scores";
import { type User, users as initialUsers } from "./users";
import { getUserScores, sortScoresDesc, sortUsersDesc } from "./utils";
import {
  ListItem,
  UserHistory,
  AddScoreForm,
  UserHistoryItem,
} from "./components";

export default function App() {
  const [scores, setScores] = useState<Score[]>(initialScore);
  const [users, setUsers] = useState<User[]>(
    sortUsersDesc(getUsersFromScores(initialUsers, scores))
  );
  const [selectedUser, setSelectedUser] = useState<UserHistoryItem>();

  useEffect(() => {
    setUsers(sortUsersDesc(getUsersFromScores(users, scores)));
  }, [scores]);

  const handleSheetData = (data: ExcelRow[]) => {
    setScores([...scores, ...data]);
  };

  const handleSubmit = (data: Score) => {
    setScores([...scores, data]);
  };

  const onListItemClick = (user: User) => {
    const sortedUserScores = sortScoresDesc(getUserScores(user, scores));
    setSelectedUser({ user, scores: sortedUserScores });
  };

  return (
    <Container maxW="6xl" padding="4">
      <H1 marginBottom="4">Mediatool Exercise</H1>
      <HStack spacing={10} align="flex-start">
        <ExcelDropzone
          onSheetDrop={handleSheetData}
          label="Import excel file here"
        />
        <VStack align="left">
          <Box>
            <H2>Current Ranking</H2>
            {users.map((user) => (
              <ListItem key={user._id} user={user} onClick={onListItemClick} />
            ))}
          </Box>
          {selectedUser && <UserHistory userHistoryItem={selectedUser} />}
          <AddScoreForm onSubmit={handleSubmit} />
        </VStack>
      </HStack>
    </Container>
  );
}
