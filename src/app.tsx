import React, { useState } from "react";
import {
  Container,
  Box,
  VStack,
  HStack,
  H1,
  H2,
  Form,
  TextField,
  Button,
  P,
} from "@northlight/ui";
import { ExcelDropzone, ExcelRow } from "./excel-dropzone.jsx";
import { getUsersFromScores } from "./utils/getUsersFromScores.js";
import { type Score, scores as initialScore } from "./scores.js";
import { type User, users as initialUsers } from "./users.js";
import { sortUsersDesc } from "./utils/sortUsers.js";

export default function App() {
  const [scores, setScores] = useState<Score[]>(initialScore);
  const [users, setUsers] = useState<User[]>(
    sortUsersDesc(getUsersFromScores(initialUsers, scores))
  );

  const handleSheetData = (data: ExcelRow[]) => {
    // replace this log with actual handling of the data
    console.log(data);
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
              <Box display={"flex"} gap={2} key={user._id}>
                <span>{user.name}</span>
                <span>{user.topScore}</span>
              </Box>
            ))}
          </Box>
        </VStack>
      </HStack>
    </Container>
  );
}
