import { Button, VStack } from "@chakra-ui/react";
import { H2, Form, TextField } from "@northlight/ui";
import React from "react";
import { Score } from "../scores";

type AddScoreFormProps = {
  onSubmit: (data: Score) => void;
};

type FormValues = {
  name: string;
  score: string;
};

const initialFormValues: FormValues = {
  name: "",
  score: "",
};

export const AddScoreForm = ({ onSubmit }: AddScoreFormProps) => {
  const handleOnSubmit = ({ name, score }: FormValues) => {
    onSubmit({ name: name, score: +score });
  };

  return (
    <VStack>
      <H2>Add</H2>

      <Form
        initialValues={initialFormValues}
        onSubmit={(values) => handleOnSubmit(values)}
      >
        <TextField
          name="name"
          label="Name:"
          placeholder="Users name"
          type="text"
          isRequired
        />
        <TextField
          marginBottom={4}
          name="score"
          label="Score:"
          type="number"
          placeholder="Users score"
          isRequired
        />
        <Button width="100%" type="submit">
          Submit
        </Button>
      </Form>
    </VStack>
  );
};
