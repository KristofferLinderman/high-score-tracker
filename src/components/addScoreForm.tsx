import { Button } from "@chakra-ui/react";
import { H2, Form, TextField, UseFormReturn } from "@northlight/ui";
import React from "react";
import { Score } from "../scores";

type AddScoreFormProps = {
  onSubmit: (data: Score) => void;
};

export const AddScoreForm = ({ onSubmit }: AddScoreFormProps) => {
  return (
    <div>
      <H2>Add</H2>

      <Form initialValues={{ name: "", score: 0 }} onSubmit={onSubmit}>
        <TextField name="name" label="Name:" type="text" isRequired />
        <TextField name="score" label="Score:" type="number" isRequired />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};
