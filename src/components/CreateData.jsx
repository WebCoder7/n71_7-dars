import { useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import axios from "../api/axios";

const CreateData = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const queryClient = useQueryClient();

  const createMutation = useMutation(
    (newPost) => axios.post("/posts", newPost),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    createMutation.mutate({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateData;
