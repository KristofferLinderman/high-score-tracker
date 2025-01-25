import React, { useEffect, useState } from "react";
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
} from "@northlight/ui";
import { ExcelDropzone, ExcelRow } from "./excel-dropzone.jsx";
import { getUsersFromScores } from "./utils/getUsersFromScores.js";
import { type Score, scores as initialScore, scores } from "./scores.js";
import { type User, users as initialUsers } from "./users.js";
import { sortUsersDesc } from "./utils/sortUsers.js";
import { ListItem } from "./components/listItem.js";
import { sortScoresDesc } from "./utils/sortScores.js";
import { getUserScores } from "./utils/getUserScores.js";

export default function App() {
  const [scores, setScores] = useState<Score[]>(initialScore);
  const [users, setUsers] = useState<User[]>(
    sortUsersDesc(getUsersFromScores(initialUsers, scores))
  );
  const [userDetails, setUserDetails] = useState<number[]>();

  useEffect(() => {
    setUsers(sortUsersDesc(getUsersFromScores(users, scores)));
  }, [scores]);

  const handleSheetData = (data: ExcelRow[]) => {
    setScores([...scores, ...data]);
  };

  const handleSubmit = (data: { name: string; score: number }) => {
    setScores([...scores, data]);
  };

  const onListItemClick = (user: User) => {
    const sortedUserScores = sortScoresDesc(getUserScores(user, scores));
    setUserDetails(sortedUserScores);
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
          {userDetails && (
            <Box>
              <H2>User Details</H2>
              <Box display="grid">
                {userDetails.map((score, index) => (
                  <span key={index}>{score}</span>
                ))}
              </Box>
            </Box>
          )}
          <Box>
            <H2>Add</H2>
            <Form
              initialValues={{ name: "", score: 0 }}
              onSubmit={handleSubmit}
            >
              <TextField name="name" label="Name:" type="text" isRequired />
              <TextField name="score" label="Score:" type="number" isRequired />
              <Button type="submit">Submit</Button>
            </Form>
          </Box>
        </VStack>
      </HStack>
    </Container>
  );
}
