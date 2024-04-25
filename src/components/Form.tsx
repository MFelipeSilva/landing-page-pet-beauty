import { z } from "zod";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import styled from "styled-components";

import { Button } from "./Button";

const StyledForm = styled.form`
  display: flex;
  max-width: 500px;
  width: 100%;
  gap: 25px;
  flex-direction: column;

  & > label {
    display: flex;
    gap: 10px;
    font-size: 18px;
    font-weight: 700;
    flex-direction: column;

    input {
      width: 100%;
      height: 60px;
      font-size: 18px;
      font-weight: 400;
      outline: none;
      padding: 20px;
      border-radius: 10px;
      border: 1px solid #000;
    }

    textarea {
      width: 100%;
      height: 230px;
      font-size: 18px;
      font-weight: 400;
      resize: none;
      outline: none;
      padding: 20px;
      border-radius: 10px;
      border: 1px solid #000;
    }
  }

  .error {
    border: 1px solid #ff0000 !important;
  }

  & > button {
    width: 100%;
    margin-top: 15px;
    padding: 20px 50px;
  }
`;

export const Form = () => {
  const createFormSchema = z.object({
    name: z.string().min(3, "Please, add your name."),
    email: z
      .string()
      .min(1, "The email is required.")
      .email("Invalid email format."),
    message: z.string().min(3, "Please, add a small text."),
  });

  type CreateFormData = z.infer<typeof createFormSchema>;

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: zodResolver(createFormSchema),
  });

  const sendForm = async (data: CreateFormData) => {
    try {
      await fetch("https://formspree.io/f/mleqakow", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      reset();
    } catch (error) {
      return error;
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(sendForm)}>
      <label>
        Name
        <input
          type="text"
          placeholder="John Doe"
          {...register("name")}
          className={errors && errors.name === undefined ? "" : "error"}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          {...register("email")}
          className={errors && errors.email === undefined ? "" : "error"}
        />
      </label>
      <label>
        Message
        <textarea
          placeholder="Hello! This is my message."
          {...register("message")}
          className={errors && errors.message === undefined ? "" : "error"}
        />
      </label>
      <Button type="submit">Send message</Button>
    </StyledForm>
  );
};
