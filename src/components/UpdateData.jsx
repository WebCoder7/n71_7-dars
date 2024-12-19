import { useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import axios from "../api/axios";

const UpdateData = ({ id, currentTitle }) => {
  const [title, setTitle] = useState(currentTitle);
  const queryClient = useQueryClient();

  const updateMutation = useMutation(
    (updatedData) => axios.put(`/posts/${id}`, updatedData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("dataList");
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMutation.mutate({ title });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateData;
